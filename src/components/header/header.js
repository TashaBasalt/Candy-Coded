import { Link } from "gatsby";
import React, { useState } from "react";

import './header.scss';
import toggle from '../../images/open.svg';

function Header({ menuLinks, path }) {
  const [isVisible, setIsVisible] = useState(false);
  
  const links = menuLinks.map(link => {

    if(path === link.link) {
      link = {name: 'home', link: '/'};
    }
    return link;
  });

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <header className="header">
      <button
        className={`header__menu ${isVisible ? "header__menu--expanded" : "header__menu--collapsed"}`}
        aria-label="Site Links Menu Toggle"
        aria-haspopup="true"
        aria-expanded={isVisible ? "true" : "false"}
        onClick={toggleVisible}
      >
        <img className="header__icon" src={toggle} alt=""/>
      </button>
      <nav role="navigation" className={isVisible ? "header__nav" : "header__nav--hidden"}>
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
