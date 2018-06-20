import React from 'react'
import Link from 'gatsby-link'
import './intro.css'
import './nav.css'

const Intro = ({ location }) => (
  <div className="intro">
    {location && location.pathname === '/' ? (
      <strong>Jani Anttonen</strong>
    ) : (
      <div className="link"><Link to="/">Back to homepage</Link></div>
    )}
    {location &&
      location.pathname === '/' &&
      `– A creative mind with a broad view of
    cutting edge technologies. Expert in designing and building web applications
    with ~10 years of experience. Has dove in the deep end using deep learning
    and statistics in the last few years.`}
  </div>
)

export default Intro
