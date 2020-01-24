import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className="site-wrapper">
      <Header 
        menuLinks={data.site.siteMetadata.menuLinks}
        path={location.pathname}
      />
      <main className="site-wrapper__content">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
