import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"

const Design = (props) => (
  <Layout>
    {props.data.allDesign.edges.map(edge => (
      <div key={edge.node.id}>
        <h2>
          {edge.node.title}
        </h2>
        <img src={edge.node.localImage.publicURL} alt="" />
        <Link to={`/design/${edge.node.id}`}>
          Link Test
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  {
    allDesign {
      edges {
        node {
          body
          date
          id
          localImage{
            publicURL
          }
          title
        }
      }
    }
  }
`;

export default Design
