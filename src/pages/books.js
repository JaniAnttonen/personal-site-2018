import React, { Component } from 'react'
import { setConfig } from 'react-hot-loader'
import ky from 'ky'
import { Parser } from 'acorn'

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

  async fetchGoodReadsAPI() {
    const NOW_READING_WIDGET_ID = '1529572489'
    const HAVE_READ_WIDGET_ID = '1529534706'

    const readingRes = await ky(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/grid_widget/73247619.Jani's%20currently-reading%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=a&shelf=currently-reading&sort=date_added&widget_id=${NOW_READING_WIDGET_ID}`
    ).text()
    const readingElem = {
      __html: Parser.parse(readingRes).body[0].declarations[0].init.value,
    }

    const readRes = await ky(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/grid_widget/73247619.Jani's%20read%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=a&shelf=read&sort=date_added&widget_id=${HAVE_READ_WIDGET_ID}`
    ).text()
    const readElem = {
      __html: Parser.parse(readRes).body[0].declarations[0].init.value,
    }

    this.setState({
      nowReading: readingElem,
      haveRead: readElem,
    })
  }

  render() {
    const { nowReading, haveRead } = this.state
    return (
      <React.Fragment>
        <p>Books that I'm currently reading:</p>
        {nowReading && (
          <section
            className="now-reading"
            dangerouslySetInnerHTML={nowReading}
          />
        )}

        <p>Books that I've read:</p>
        {haveRead && (
          <section className="read" dangerouslySetInnerHTML={haveRead} />
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
