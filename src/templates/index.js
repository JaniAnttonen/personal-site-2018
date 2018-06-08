import React, { Component } from 'react'
import Link from 'gatsby-link'
import SVGText from '../components/svgtext';

// TODO: https://www.goodreads.com/api

const IndexPage = ({
  data
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
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
      <SVGText text={frontmatter.title} id="svgintro" />
    </div>
  );
}

export default IndexPage;

const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
