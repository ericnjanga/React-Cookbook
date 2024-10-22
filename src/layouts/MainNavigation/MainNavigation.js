import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../images/Logo.png";
// import { MenuList } from "../../components/Menus";
import { useSections } from "../../hooks/useDatabase";
import NavSection from "./NavSection";
import NavCategories from "./NavCategories";
import NavPages, { NavSectionPage } from "./NavPages";
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
        {pageSections.map((section, index) => {
          return (
            <NavSection key={index} {...section}>
              {/** Render any page that IS DIRECTLY LINKED to a section (no category intermediary) */
                section.categoryIds.length === 0 && (
                <NavSectionPage {...section} />
              )}

              {/** Render all Categories LINKED to this section */}
              <NavCategories {...section}>
                <NavPages sectionId={section.id} />
              </NavCategories>
            </NavSection>
          );
        })}
      </nav>
    </>
  );
};

MainNavigation.displayName = "MainNavigation";
MainNavigation.whyDidYouRender = true;
export default MainNavigation;
