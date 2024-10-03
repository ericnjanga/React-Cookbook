import React from "react";
import { NavLink } from "react-router-dom"; 
import Logo from './../images/Logo.png';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const activateLink = ({ isActive }) => (isActive ? "active" : null);

const Nav = () => {

  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState('r');

  // Extract the current route param
  useEffect(() => {
    // Split pathname into an array, eliminate empty elements, and extract the last array element
    const currRoute = location.pathname.split('/').filter(item => item!=='').pop();
    setCurrentRoute(currRoute); 
  }, [currentRoute, location.pathname]);

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
            {currentRoute === 'react' &&
              <ul>
                <li>
                  <NavLink to="/high-order-components" className={activateLink}>
                    High Order Components (HOC)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/render-props">Render Props</NavLink>
                </li>
                <li>
                  <NavLink to="/component-composition" className={activateLink}>
                    Component Composition
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hooks" className={activateLink}>
                    Hooks
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forms" className={activateLink}>
                    Forms
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/data-fetching" className={activateLink}>
                    Data Fetching
                  </NavLink>
                </li>
              </ul>
            }
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
