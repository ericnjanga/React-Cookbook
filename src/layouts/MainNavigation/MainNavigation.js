import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../images/Logo.png";
// import { MenuList } from "../../components/Menus";
import { useSections } from "../../hooks/useDatabase";
// import NavSection from "./NavSection";
// import NavCategories from "./NavCategories";
// import NavPages, { NavSectionPage } from "./NavPages";
import { setActiveClass } from "../../utilities/utils";

/**
 * Renders a menu organized in the following order:
 * - Sections (root)
 * - Categories (children)
 * - Pages (leaves)
 * @returns
 */
const MainNavigation = () => {
  const pageSections = useSections();

  return (
    <>
      <header className="main-sidebar-header">
        <NavLink to="/" className={setActiveClass}>
          <img className="logo" src={Logo} alt="Front-end knowledge base" />
        </NavLink>
      </header>

      <nav className="main-sidebar-nav">
        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Introduction</h3>
          <a aria-current="page" className="active" href="/">
            Introduction
          </a>
        </ul>

        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Interview challenges</h3>
          <div>
            <ul>
              <li>
                <a href="/interview-challenges/react">React</a>
              </li>
              <li>
                <a href="/interview-challenges/javascript">Javascript</a>
              </li>
              <li>
                <a href="/interview-challenges/accessibility">Accessibility</a>
              </li>
              <li>
                <a href="/interview-challenges/css">CSS</a>
              </li>
            </ul>
          </div>
        </ul>

        {/* <ul className="menu-list">
          <h3 className="main-sidebar-heading">Coding Patterns</h3>
          <div>
            <a className="" href="/coding-patterns/javascript">
              JavaScript
            </a>
            <ul>
              <li>
                <a className="" href="/coding-patterns/javascript/js-page1">
                  ** JS page 1
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/javascript/js-page2">
                  ** JS page 2
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="" href="/coding-patterns/react">
              React
            </a>
            <ul>
              <li>
                <a className="" href="/coding-patterns/react/performance-patterns">
                  Writing performant apps
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/logic-enapsulation">
                  Logic Encapsulation
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/passing-data-deeply">
                  Passing Data Deeply
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/render-props">
                  Render Props
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/component-composition">
                  Component composition
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/hooks">
                  Hooks
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/forms">
                  Forms
                </a>
              </li>
              <li>
                <a className="" href="/coding-patterns/react/data-fetching">
                  Data fetching
                </a>
              </li>
            </ul>
          </div>
        </ul> */}
        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Knowledge Base</h3>
          <div>
            <a className="" href="/knowledge-base/javascript">
              JavaScript
            </a>
            <ul>
              <li>
                <a className="" href="/knowledge-base/javascript/core-concepts">
                  Core Concepts
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="/knowledge-base/javascript/interesting-patterns"
                >
                  Interesting Patterns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="" href="/knowledge-base/html-and-css">
              HTML &amp; CSS
            </a>
            <ul>
              <li>
                <a
                  className=""
                  href="/knowledge-base/html-and-css/core-concepts"
                >
                  HTML &amp; CSS Core Concepts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="" href="/knowledge-base/react">
              React
            </a>
            <ul>
              <li>
                <a className="" href="/knowledge-base/react/core-concepts">
                  React Core Concepts
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <ul className="menu-list">
          <h3 className="main-sidebar-heading">Additional Resources</h3>
          <a className="" href="/additional-resources">
            Additional resources
          </a>
        </ul>
      </nav>

      {/* <nav className="main-sidebar-nav"> 


        {pageSections.map((section, index) => {
          return (
            <NavSection key={index} {...section}>
              {
                section.categoryIds.length === 0 && (
                <NavSectionPage {...section} />
              )}
 
              <NavCategories {...section}>
                <NavPages sectionId={section.id} />
              </NavCategories>
            </NavSection>
          );
        })}
      </nav> */}
    </>
  );
};

MainNavigation.displayName = "MainNavigation";
MainNavigation.whyDidYouRender = true;
export default MainNavigation;
