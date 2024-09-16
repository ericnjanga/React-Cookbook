import React from "react";
import { NavLink } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const activateLink = ({ isActive }) => (isActive ? "active" : null);

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={activateLink}>
              Dynamic JSX
            </NavLink>{" "}
            {/* /dynamic-jsx */}
          </li>
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

        <hr />

        <Heading as="h4" size='4'>Categories</Heading>

        <ul>
          <li>
            <NavLink to="/category-logic-enpasulation" className={activateLink}>
              Logic encapsulation &amp; code reuse
            </NavLink>
          </li>
        </ul>

        <hr />

        <Heading as="h4" size='4'>Interview Questions</Heading>
        
        <ul>
          <li>
            <NavLink to="/react-interview-questions" className={activateLink}>
              React Interview Quesrtions
            </NavLink>
          </li>
          <li>
            <NavLink to="/html-css-interview-questions" className={activateLink}>
              HTML/CSS Interview Quesrtions
            </NavLink>
          </li>
        </ul>
      </nav>

      <footer>
        <NavLink to="/additional-resources" className={activateLink}>
          Addition Resources
        </NavLink>
      </footer>
    </>
  );
};

export default Nav;
