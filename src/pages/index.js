import React from "react"

import Layout from "../components/layout/layout"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div className="front-page">
      <p className="front-page__title">An Experiment</p>
    </div>
  </Layout>
)

export default IndexPage
