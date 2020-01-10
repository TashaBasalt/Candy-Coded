import { Link } from "gatsby"
import React from "react"

function Header({ menuLinks }) {

  
  const links = menuLinks.map(link => {
      const location = [{name: 'blog', href: '/blog'}];
      if (location[0].href.indexOf(link.link) >= 0) {
        link = {name: 'home', link: '/'};
      }
      return link;
    });

  return (
    <header className="header">
      <nav className="header__nav">
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
