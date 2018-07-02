import React from 'react'
import Helmet from 'react-helmet'

import 'prismjs/themes/prism-funky.css'
import './blog-post.css'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div className="blog-post-container animated fadeIn">
      <Helmet title={`Jani Anttonen - ${post.frontmatter.title}`} />
      <article className="blog-post">
        <header className="title">
          <h1>{post.frontmatter.title}</h1>
          <time>{post.frontmatter.date}</time>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`
