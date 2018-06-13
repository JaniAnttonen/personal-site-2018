import React, { Component } from 'react'
import Link from 'gatsby-link'
import SVGText from '../components/svgtext'

// TODO: https://www.goodreads.com/api

const IndexPage = ({ data }) => {
  return (
    <div>
      <style>{`
      body { 
        min-height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        background: #09051a;
        align-items: center;
      }
    `}</style>
      <SVGText text="Jani Anttonen" id="svgintro" />
    </div>
  )
}

export default IndexPage
