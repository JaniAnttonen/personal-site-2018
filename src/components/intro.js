import React from 'react'
import './intro.css'
import './nav.css'

const Intro = ({ location }) =>
  location &&
  location.pathname === '/' && (
    <header className="intro animated fadeIn">
      <span className="animated fadeIn">
        <strong>Jani Anttonen</strong> – A creative mind with a broad view of
        cutting edge technologies. Expert in designing and building web
        applications with over 10 years of experience. Currently working on
        distributed systems, and on{' '}
        <a
          href="https://marshallai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          physical security at MarshallAI.
        </a>{' '}
      </span>
    </header>
  )

export default Intro
