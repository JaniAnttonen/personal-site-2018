import React from 'react'
import Link from 'gatsby-link'
import './intro.css'
import './nav.css'

const Intro = ({ location }) => (
  <header className="intro animated fadeIn">
    {location && location.pathname === '/' ? (
      <span className="animated fadeIn"><strong>Jani Anttonen</strong></span>
    ) : (
      <div className="link highlight"><Link to="/">Back to homepage</Link></div>
    )}
    {location &&
      location.pathname === '/' && (
      <span className="animated fadeIn">– A creative mind with a broad view of
    cutting edge technologies. Expert in designing and building web applications
    with ~10 years of experience. Has dove in the deep end using deep learning
    and statistics in the last few years.</span>)}
  </header>
)

export default Intro
