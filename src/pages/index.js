import React from "react";
import { NavLink } from "react-router-dom";
// import { usePage } from "../hooks/useDatabase";
import PageHeader from "../components/PageHeader";
import { setActiveClass } from "../utilities/utils";

const PageHome = () => {
  // const page = usePage({ id: -1 });

  // console.log('>>>>>page=', page);
  
  return (
    <>
      <div className="row">
        <div className="col-9">
          <PageHeader />

          <div className="row">
            <div className="col-4">
              <h2>Knowledge base</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur massa facilisis
                scelerisque tempor in.
              </p>
              {
                /**
                 * 
                 * BACKUP INTRODUCTORY TEXT:
                 * ---------
        subtitle: `--- **** ---  I've always asked myself WHY. Why do we do what we do? Whta's the benefit of coding this way or that way? What's the reason behind this or that pattern? Creating this cookbook has provided me with an excellent opportunity to research and answer these questions; and I hope readers will find this UI cookbook as inspiring as I did.`,
                 */
              }
              <ul className="list-align-left">
                <li>
                  <NavLink
                    to="/knowledge-base/javascript-core-concepts"
                    className={setActiveClass}
                  >
                    JavaScript
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/knowledge-base/html-and-css-core-concepts"
                    className={setActiveClass}
                  >
                    HTML &amp; CSS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/knowledge-base/react" className={setActiveClass}>
                    React
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h2>Coding patterns</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur massa facilisis
                scelerisque tempor in.
              </p>
              <ul className="list-align-left">
                <li>
                  <NavLink
                    to="/coding-patterns/javascript"
                    className={setActiveClass}
                  >
                    JavaScript
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coding-patterns/javascript"
                    className={setActiveClass}
                  >
                    React
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h2>Additional Resources</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur massa facilisis
                scelerisque tempor in.
              </p>
              <ul className="list-align-left">
                <li>
                  <NavLink
                    to="/additional-resources/react-resoures"
                    className={setActiveClass}
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

PageHome.displayName = "****PageHome";
export default PageHome;
