import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

import rss from './rss.svg'
import './blog.css'

const Index = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout {...props}>
      <div className="blog-posts animated fadeIn">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <span>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </span>
                <time>{post.frontmatter.date}</time>
              </div>
            )
          })}
        <Link to="/rss.xml">
          <img src={rss} className="icon rss" alt="icon rss" />
        </Link>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default Index
