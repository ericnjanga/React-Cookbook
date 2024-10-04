import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../images/Logo.png";
import { useState, useEffect } from "react";
import { MenuList } from "../components/Menus";
import useRouteSegments from "../hooks/useRouteSegments";

const activateLink = ({ isActive }) => (isActive ? "active" : null);


const Nav = () => { 
  const [hasReactSegment, setHasReactSegment] = useState(false);
  const routeSegments = useRouteSegments();

  /**
   * Set a boolean to true if a specific route segment is contained in the list.
   * We will use it to conditionally render submenus. This will allow the submenu
   * to remain visible anytime the parent route is active
   */
  useEffect(() => {
    const reactSegmentExisits = routeSegments.includes('react');
    setHasReactSegment(reactSegmentExisits);
  }, [routeSegments, hasReactSegment]);

  return (
    <>
      <header className="main-sidebar-header">
        <NavLink to="/" className={activateLink}>
          <img className="logo" src={Logo} alt="Front-end knowledge base" />
        </NavLink>
      </header>

      <nav className="main-sidebar-nav">
        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Introduction</h3>
          <li>
            <NavLink to="/" className={activateLink}>
              Overview
            </NavLink>
          </li>
        </ul>

        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Coding patterns</h3>
          <li>
            <NavLink to="/coding-patterns/javascript" className={activateLink}>
              JavaScript
            </NavLink>
          </li>
          <li>
            <NavLink to="/coding-patterns/react" className={activateLink}>
              React
            </NavLink>
            {hasReactSegment && <MenuList name='react coding patterns' />}
          </li>
        </ul>

        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Knowledge base</h3>
          <li>
            <NavLink to="/knowledge-base/javascript" className={activateLink}>
              JavaScript
            </NavLink>
          </li>
          <li>
            <NavLink to="/knowledge-base/html-css" className={activateLink}>
              HTML &amp; CSS
            </NavLink>
          </li>
          <li>
            <NavLink to="/knowledge-base/react" className={activateLink}>
              React
            </NavLink>
          </li>
        </ul>

        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Addition Resources</h3>
          <li>
            <NavLink
              to="/additional-resources/overview"
              className={activateLink}
            >
              Overview
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
