import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import "animate.css"

import Navigation from '../components/nav'
import Intro from '../components/intro'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div className="app">
    <div className="wrapper">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Intro location={location} />
      <Navigation location={location} />
      <main className="subpage">
        {children()}
      </main>
      <Footer location={location} />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
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
