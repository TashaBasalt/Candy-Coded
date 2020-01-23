import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Img from "gatsby-image"

const Design = (props) => (
  <Layout>
    {props.data.allDesign.edges.map(edge => (
      <div key={edge.node.id}>
        <h2>
          {edge.node.title}
        </h2>
        <Img fixed={edge.node.localImage.childImageSharp.fixed} />
        {/* <img src={edge.node.localImage.childImageSharp.fixed} alt="" /> */}
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
            childImageSharp{
              fixed(width: 200){
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
        }
      }
    }
  }
`;

export default Design
