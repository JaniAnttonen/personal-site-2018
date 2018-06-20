import React, { Component } from 'react'
import Link from 'gatsby-link'

import './intro.css'

// TODO: https://www.goodreads.com/api

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className="wrapper">
        <div className="intro">
          <strong>Jani Anttonen</strong> – A creative mind with a broad view of
          cutting edge technologies. Expert in designing and building web
          applications with ~10 years of experience. Has dove in the deep end
          using deep learning and statistics in the last few years.
        </div>
        <div className="links">
          <div className="link">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="link">
            <a href="https://keybase.io/jantto" target="_blank">
              Keybase
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
