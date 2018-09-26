import React from 'react'
import './books.css'

const Books = () => (
  <div className="animated fadeIn flex column">
    <p>Books that I'm currently reading:</p>
    <section className="now-reading">
      <div id="gr_grid_widget_1529572489">
        <div className="gr_grid_container">
          <div className="gr_grid_book_container">
            <a
              title="Exponential Organizations: Why new organizations are ten times better, faster, cheaper than yours (and what to do about it)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/22616127-exponential-organizations"
            >
              <img
                alt="Exponential Organizations: Why new organizations are ten times better, faster, cheaper than yours"
                src="https://images.gr-assets.com/books/1404320056m/22616127.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="The Art of Deception: Controlling the Human Element of Security"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/18160.The_Art_of_Deception"
            >
              <img
                alt="The Art of Deception: Controlling the Human Element of Security"
                src="https://images.gr-assets.com/books/1385273509m/18160.jpg"
              />
            </a>
          </div>
          <noscript>
            <br />Share{' '}
            <a rel="nofollow" href="/">
              book reviews
            </a>{' '}
            and ratings with Jani, and even join a{' '}
            <a rel="nofollow" href="/group">
              book club
            </a>{' '}
            on Goodreads.
          </noscript>
        </div>
      </div>
      <script
        src="https://www.goodreads.com/review/grid_widget/73247619.Jani's%20currently-reading%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=a&shelf=currently-reading&sort=date_added&widget_id=1529572489"
        type="text/javascript"
        charset="utf-8"
      />
    </section>

    <p>Books that I've read:</p>
    <section className="read">
      <div id="gr_grid_widget_1529534706">
        <div className="gr_grid_container">
          <div className="gr_grid_book_container">
            <a
              title="Decoding the Universe: How the New Science of Information Is Explaining Everything in the Cosmos, from Our Brains to Black Holes"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/116623.Decoding_the_Universe"
            >
              <img
                alt="Decoding the Universe: How the New Science of Information Is Explaining Everything in the Cosmos, from Our Brains to Black Holes"
                src="https://images.gr-assets.com/books/1403169488m/116623.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Thinking, Fast and Slow"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
            >
              <img
                alt="Thinking, Fast and Slow"
                src="https://images.gr-assets.com/books/1317793965m/11468377.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Cosmos"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/55030.Cosmos"
            >
              <img
                alt="Cosmos"
                src="https://images.gr-assets.com/books/1388620656m/55030.jpg"
              />
            </a>
          </div>
          <noscript>
            <br />Share{' '}
            <a rel="nofollow" href="/">
              book reviews
            </a>{' '}
            and ratings with Jani, and even join a{' '}
            <a rel="nofollow" href="/group">
              book club
            </a>{' '}
            on Goodreads.
          </noscript>
        </div>
      </div>
      <script
        src="https://www.goodreads.com/review/grid_widget/73247619.Jani's%20read%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=a&shelf=read&sort=date_added&widget_id=1529534706"
        type="text/javascript"
        charSet="utf-8"
      />
    </section>
  </div>
)

export default Books
