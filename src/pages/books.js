import React, { Component } from 'react'
import { setConfig } from 'react-hot-loader'
import ky from 'ky'
import { Parser } from 'acorn'
import { addDays, isAfter } from 'date-fns'

import Layout from '../components/layout'
import './books.css'

setConfig({ pureSFC: true })

class GoodReads extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowReading: '',
      haveRead: '',
    }
  }

  async componentDidMount() {
    await this.fetchGoodReadsAPI()
  }

  updateCache(janiBooksCacheObject) {
    if (window.localStorage) {
      janiBooksCacheObject.timestamp = new Date(Date.now())
      window.localStorage.setItem(
        'janianttonen.com:cache',
        JSON.stringify(janiBooksCacheObject)
      )
    }
  }

  getCache() {
    const returnable = { reading: false, read: false }
    if (window.localStorage) {
      let cache = window.localStorage.getItem('janianttonen.com:cache')
      if (cache) {
        cache = JSON.parse(cache)
        const lastCachePlusTwoDays = addDays(new Date(cache.timestamp), 2)
        const now = new Date(Date.now())
        if (isAfter(lastCachePlusTwoDays, now)) {
          returnable.reading = cache.reading
          returnable.read = cache.read
        }
      }
    }
    return returnable
  }

  async fetchGoodReadsAPI() {
    const cache = this.getCache()

    if (cache.read && cache.reading) {
      this.setState({
        nowReading: { __html: cache.reading },
        haveRead: { __html: cache.read },
      })
    } else {
      const NOW_READING_WIDGET_ID = '1529572489'
      const HAVE_READ_WIDGET_ID = '1529534706'

      const readingRes = await ky(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/grid_widget/73247619.Jani's%20currently-reading%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=6&order=a&shelf=currently-reading&sort=date_added&widget_id=${NOW_READING_WIDGET_ID}`
      ).text()
      const readingElem = {
        __html: Parser.parse(readingRes).body[0].declarations[0].init.value,
      }

      const readRes = await ky(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/grid_widget/73247619.Jani's%20read%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=9&order=a&shelf=read&sort=date_added&widget_id=${HAVE_READ_WIDGET_ID}`
      ).text()
      const readElem = {
        __html: Parser.parse(readRes).body[0].declarations[0].init.value,
      }

      this.updateCache({ reading: readingElem.__html, read: readElem.__html })
      this.setState({
        nowReading: readingElem,
        haveRead: readElem,
      })
    }
  }

  render() {
    const { nowReading, haveRead } = this.state
    return (
      <React.Fragment>
        <p>Books that I'm currently reading:</p>
        {nowReading ? (
          <section
            className="now-reading"
            dangerouslySetInnerHTML={nowReading}
          />
        ) : (
          <section className="now-reading">
            <div class="gr_grid_book_container" />
            <div class="gr_grid_book_container" />
            <div class="gr_grid_book_container" />
          </section>
        )}

        <p>Books that I've read:</p>
        {haveRead ? (
          <section className="read" dangerouslySetInnerHTML={haveRead} />
        ) : (
          <section className="read">
            <div class="gr_grid_book_container" />
            <div class="gr_grid_book_container" />
            <div class="gr_grid_book_container" />
          </section>
        )}
      </React.Fragment>
    )
  }
}

const Books = props => (
  <Layout {...props}>
    <div className="animated fadeIn flex column">
      <GoodReads />
    </div>
  </Layout>
)

export default Books
