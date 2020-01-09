import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="header__nav">
      <span className="header__item">
        <Link to="/code">Code</Link>
      </span>
      <span className="header__item">
        <Link to="/blog">Blog</Link>
      </span>
      <span className="header__item">
        <Link to="/design">Design</Link>
      </span>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
