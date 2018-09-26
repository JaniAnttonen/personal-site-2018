import React from 'react'
import Link from 'gatsby-link'
//import home from './home.svg'
import './nav.css'

const Navigation = ({ location: { pathname } }) => (
  <nav className={`links${pathname === '/' ? ' animated fadeInDown' : ''}`}>
    {/* {pathname !== '/' && (
      <div className="link">
        <Link to="/">
          <img src={home} className="icon home" />
        </Link>
      </div>
    )} */}
    <div className={`link${pathname === '/blog' ? ' active' : ''}`}>
      <Link to="/blog">Blog</Link>
    </div>
    <div className={`link${pathname === '/contact' ? ' active' : ''}`}>
      <Link to="/contact">Contact</Link>
    </div>
    <div className={`link${pathname === '/music' ? ' active' : ''}`}>
      <Link to="/music">Music</Link>
    </div>
    <div className={`link${pathname === '/books' ? ' active' : ''}`}>
      <Link to="/books">Books</Link>
    </div>
  </nav>
)

export default Navigation
