import React from 'react'
import Link from 'gatsby-link'
import './nav.css'

const Navigation = ({location: {pathname}}) => (
  <nav className={`links${pathname==="/" ? " animated fadeInDown" : ""}`}>
    <div className={`link${pathname==="/blog" ? " active" : ""}`}>
      <Link to="/blog">Blog</Link>
    </div>
    <div className="link">
      <a href="https://keybase.io/jantto" target="_blank" rel="noopener">
        Keybase
      </a>
    </div>
    <div className={`link${pathname==="/music" ? " active" : ""}`}>
      <Link to="/music">
        Music
      </Link>
    </div>
    <div className={`link${pathname==="/books" ? " active" : ""}`}>
      <Link to="/books">Books</Link>
    </div>
  </nav>
)

export default Navigation
