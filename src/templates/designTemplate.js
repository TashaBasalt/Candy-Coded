import React from 'react';
import {graphql} from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout/layout"

const designTemplate = (props) => {
  return (
    <Layout location={props.location}>
      <section>
        <h2>
          {props.data.design.title}
        </h2>
        <Img fixed={props.data.design.localImage.childImageSharp.fixed} />
        <p>
          {props.data.design.body}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query DesignQuery($designId: String!) {
    design(id: {eq: $designId}){
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
`;

export default designTemplate;
