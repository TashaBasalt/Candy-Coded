import React from 'react';

import Layout from "../components/layout/layout"

const articleTemplate = (props) => {
  return (
    <Layout>
      <section>
        <h2>
          {props.pageContext.title}
        </h2>
        <p>
          {props.pageContext.body}
        </p>
      </section>
    </Layout>
  );
}

export default articleTemplate;
