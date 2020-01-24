import React from 'react';

import Layout from "../components/layout/layout"

const articleTemplate = (props) => {
  return (
    <Layout location={props.location}>
      <section>
        <h2>
          {props.data.article.title}
        </h2>
        <p>
          {props.data.article.body}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ArticleQuery($articleId: String!) {
    article(id: {eq: $articleId}){
      body
      date
      id
      tags
      title
    }
  }
`;

export default articleTemplate;
