import React, { createContext, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SectionUriContext } from "./NavSection";
import { useCategories } from "../../hooks/useDatabase";

export const CategoryContext = createContext({});


const NavCategories = ({ categoryIds, children }) => {
  const pageCategories = useCategories(categoryIds);
  const sectionUri = useContext(SectionUriContext);

  return pageCategories.map((cat, index) => {
    const linkTo = `/${sectionUri}/${cat.uri}`;

    return (
      <div key={index}>
        <NavLink to={linkTo}>{cat.title}</NavLink>
        <CategoryContext.Provider value={cat}>
          {children}
        </CategoryContext.Provider>
      </div>
    );
  });
};

export default NavCategories;
