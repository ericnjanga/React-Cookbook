import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { NavLink } from "react-router-dom";

const activateLink = ({ isActive }) => (isActive ? "active" : null);

const PageHome = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="row">
        <div className="col-9">
          <header className="sc-block-mg-bot-2">
            <h1>Introduction</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum
              bibendum pharetra massa facilisis scelerisque tempor in. Commodo
              pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam
              sed nunc accumsan. Eu id nulla est diam.
            </p>
          </header>

          <div className="row">
            <div className="col-4">
              <h2>Knowledge base</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur massa facilisis
                scelerisque tempor in.
              </p>
              <ul className="list-align-left">
                <li>
                  <NavLink
                    to="/knowledge-base/javascript"
                    className={activateLink}
                  >
                    JavaScript
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/knowledge-base/html-css"
                    className={activateLink}
                  >
                    HTML &amp; CSS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/knowledge-base/react"
                    className={activateLink}
                  >
                    React
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <h2>Coding patterns</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur massa facilisis
                scelerisque tempor in.
              </p>
              <ul className="list-align-left">
                <li>
                  <NavLink
                    to="/knowledge-base/javascript"
                    className={activateLink}
                  >
                    JavaScript
                  </NavLink>
                </li> 
                <li>
                  <NavLink
                    to="/knowledge-base/javascript"
                    className={activateLink}
                  >
                    React
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHome;
