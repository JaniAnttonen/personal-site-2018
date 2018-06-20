import React from 'react'
import Link from 'gatsby-link'
import './nav.css'

const Navigation = () => (
  <div className="links">
    <div className="link">
      <Link to="/blog">Blog</Link>
    </div>
    <div className="link">
      <a href="https://keybase.io/jantto" target="_blank">
        Keybase
      </a>
    </div>
    <div className="link">
      <a href="https://refer.bandcamp.com" target="_blank">
        Music
      </a>
    </div>
    <div className="link">
      <Link to="/books">Books</Link>
    </div>
  </div>
)

export default Navigation
