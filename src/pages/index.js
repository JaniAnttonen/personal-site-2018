import React, { Component } from 'react'
import Link from 'gatsby-link'

// TODO: https://www.goodreads.com/api

const IndexPage = ({ data }) => {
  return (
    <div>
      <style>{`
      #intro {
        font-family: "Aadhunik";
        font-size: 13px;
        color: #c0bdf0;
      }
    `}</style>
      <div id="intro">Jani Anttonen</div>
    </div>
  )
}

export default IndexPage
