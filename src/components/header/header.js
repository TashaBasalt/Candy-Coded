import { Link } from "gatsby"
import React, { useState } from "react"

import './header.scss'

function Header({ menuLinks }) {

  const [isVisible, setIsVisible] = useState(false);
  
  const links = menuLinks.map(link => {
    const location = [{name: 'blog', href: '/blog'}];
    if (location[0].href.indexOf(link.link) >= 0) {
      link = {name: 'home', link: '/'};
    }
    return link;
  });

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <button className={isVisible ? "header__menu--active" : "header__menu"}  aria-haspopup="true" aria-expanded="false" onClick={toggleVisible}>
          <span className="header__open"></span>
          <span className="header__close"></span>
        </button>
        {links.map(link => (
          <span
            key={link.name}
            className="header__item"
          >
            <Link to={link.link}>
              {link.name}
            </Link>
          </span>
        ))}
      </nav>
    </header>
  )
}

export default Header
