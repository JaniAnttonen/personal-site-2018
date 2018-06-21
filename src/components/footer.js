import React from 'react'
import Link from 'gatsby-link'
import './nav.css'
import './footer.css'

const Footer = ({location: { pathname }}) => pathname !== "/" ? <footer><div className="link highlight"><Link to="/">Back to homepage</Link></div></footer> : null

export default Footer