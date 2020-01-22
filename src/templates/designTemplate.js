import React from 'react';

import Layout from "../components/layout/layout"

const designTemplate = (props) => {
  return (
    <Layout>
      <section>
        <h2>
          {props.pageContext.title}
        </h2>
        <img src={props.pageContext.localImage.publicURL} alt='' />
        <p>
          {props.pageContext.body}
        </p>
      </section>
    </Layout>
  );
}

export default designTemplate;
