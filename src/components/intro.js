import React from 'react'
import './intro.css'
import './nav.css'

const Intro = ({ location }) => location &&
location.pathname === '/' && (
  <header className="intro animated fadeIn">
        <span className="animated fadeIn"><strong>Jani Anttonen</strong> – A creative mind with a broad view of
    cutting edge technologies. Expert in designing and building web applications
    with ~10 years of experience. Has dove in the deep end using deep learning
    and statistics in the last few years.</span>
  </header>
)

export default Intro
