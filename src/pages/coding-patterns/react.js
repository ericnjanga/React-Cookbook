import React from "react";
import { NavLink } from "react-router-dom";

const activateLink = ({ isActive }) => (isActive ? "active" : null);

const PageCodingPatternsReact = () => {
  return (
    <>
      <div className="row">
        <div className="col-9">
          <header className="">
            <h1>React</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum
              bibendum pharetra massa facilisis scelerisque tempor in. Commodo
              pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam
              sed nunc accumsan. Eu id nulla est diam.
            </p>
          </header>

          <div className="row">
            <div className="col-6">
              <ul className="list-align-left">
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
            </div>
          </div>

         

          {/* <hr />

        <Heading as="h4" size='4'>Categories</Heading>

        <ul>
          <li>
            <NavLink to="/category-logic-enpasulation" className={activateLink}>
              Logic encapsulation &amp; code reuse
            </NavLink>
          </li>
        </ul> */}
        </div>
      </div>
    </>
  );
};

export default PageCodingPatternsReact;
