import React, { createContext } from "react";

export const SectionUriContext = createContext(null);

const NavSection = ({ children, title, uri }) => {
  return (
    <ul className="menu-list">
      <h3 className="main-sidebar-heading">{title}</h3>
      <SectionUriContext.Provider value={uri}>
        {children}
      </SectionUriContext.Provider>
    </ul>
  );
};

export default NavSection;
