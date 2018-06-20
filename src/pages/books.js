import React from 'react'
import Link from 'gatsby-link'

const Books = () =>
  <div className="animated fadeIn">
    <p>Here are some of the latest books I've marked as read on GoodReads:</p>
  <style type="text/css" media="screen">{`
        .gr_grid_container {
        }

        .gr_grid_book_container {
          float: left;
          width: 98px;
          height: 160px;
          padding: 0px 0px;
          overflow: hidden;
        }
      `}</style>
      <div id="gr_grid_widget_1529534706">
          <div className="gr_grid_container">
    <div className="gr_grid_book_container"><a title="Decoding the Universe: How the New Science of Information Is Explaining Everything in the Cosmos, from Our Brains to Black Holes" rel="nofollow" href="https://www.goodreads.com/book/show/116623.Decoding_the_Universe"><img alt="Decoding the Universe: How the New Science of Information Is Explaining Everything in the Cosmos, from Our Brains to Black Holes" src="https://images.gr-assets.com/books/1403169488m/116623.jpg" /></a></div>
    <div className="gr_grid_book_container"><a title="Thinking, Fast and Slow" rel="nofollow" href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"><img alt="Thinking, Fast and Slow" src="https://images.gr-assets.com/books/1317793965m/11468377.jpg" /></a></div>
    <div className="gr_grid_book_container"><a title="Cosmos" rel="nofollow" href="https://www.goodreads.com/book/show/55030.Cosmos"><img alt="Cosmos" src="https://images.gr-assets.com/books/1388620656m/55030.jpg" /></a></div>
  <noscript><br/>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Jani, and even join a <a rel="nofollow" href="/group">book club</a> on Goodreads.</noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/73247619.Jani's%20read%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=a&shelf=read&sort=date_added&widget_id=1529534706" type="text/javascript" charSet="utf-8"></script>

  </div>


export default Books
