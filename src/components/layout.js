import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'animate.css'

import Navigation from './nav'
import Intro from './intro'
import Footer from './footer'

import './layout.css'

const Layout = ({ children, data, location }) => (
  <div className="app">
    <div className="wrapper">
      <Helmet
        title="Jani Anttonen"
        meta={[
          { name: 'description', content: 'Jani Anttonen' },
          {
            name: 'keywords',
            content:
              'Software Developer, Developer, Jani Anttonen, Machine Learning, AI, ML, Data Science, React, Javascript, Node, NodeJS, Python, Golang, Go, Finland, Finnish, Turku, Helsinki',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Intro location={location} />
      <Navigation location={location} />
      <main className="subpage">{children}</main>
      <Footer location={location} />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
