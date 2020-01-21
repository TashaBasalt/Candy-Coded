import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import "./blog.scss"

const Blog = (props) => (
  <Layout>
    {props.data.allArticle.edges.map(edge => (
      <div className="test" key={edge.node.id}>
        <h2>
          {edge.node.title}
        </h2>
        <Link to={`/article/${edge.node.id}`}>
          Link Test
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  {
    allArticle {
      edges {
        node {
          body
          date
          id
          tags
          title
        }
      }
    }
  }
`;

export default Blog
