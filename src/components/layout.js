import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'animate.css'

import Navigation from './nav'
import Intro from './intro'
import Footer from './footer'

import './layout.css'
import '../../node_modules/pattern.css/dist/pattern.css'

const paymentPointer = '$ilp.uphold.com/nHkQG39raWhE'

const Layout = ({ children, data, location }) => (
  <div className='fauxbody pattern-dots-sm'>
    <div className='app'>
      <div className='wrapper'>
        <Helmet
          title='Jani Anttonen'
          meta={[
            { name: 'description', content: 'Jani Anttonen' },
            {
              name: 'keywords',
              content:
                'Software Developer, Developer, Blockchain, Decentralization, p2p, peer-to-peer, Jani Anttonen, Machine Learning, AI, ML, Data Science, React, Javascript, Node, NodeJS, Python, Golang, Go, Rust, Finland, Finnish, Turku, Helsinki',
            },
            { name: 'monetization', content: paymentPointer }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <Intro location={location} />
        <Navigation location={location} />
        <main className='subpage'>{children}</main>
        <Footer location={location} />
      </div>
      <noscript>This website requires Javascript to run.</noscript>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
