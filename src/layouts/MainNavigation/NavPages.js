import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { usePage, usePages } from "../../hooks/useDatabase";
import useRouteSegments from "../../hooks/useRouteSegments"; 
import { CategoryContext } from "./NavCategories";
import { SectionUriContext } from "./NavSection";



const NavPages = ({ sectionId }) => {
  const category = useContext(CategoryContext);
  const sectionUri = useContext(SectionUriContext);
  const pages = usePages(sectionId, category.id);
  
  return (
    <ul>
      {pages.map((page, index) => { 
        const linkTo = `/${sectionUri}/${category.uri}/${page.uri}`;

        return (
          <li key={index}>
            <NavLink to={linkTo}>
            {page.title}
            </NavLink>
          </li> 
        );
      })}
    </ul>
  );
};

 


export const NavPage = ({ title, pageUri, sectionUri }) => { 
  const linkTo = !pageUri ? `/` : `/${sectionUri}`;
  
  return ( 
    <NavLink to={linkTo}>
      {title}
    </NavLink> 
  );
};



export const NavSectionPage = ({ id, uri }) => {
  const page = usePage({ sectionId: id });
  const params = {
    title: page!==null ? page.title : '',
    pageUri: page!==null ? page.uri : '',
    sectionUri: uri,
    categoryUri: '',
  };

  // console.log('>>>>>>>>>>>>params = ', params ); 

  return (
    // <p>nav page</p>
    page!==null && <NavPage {...params} />
  );
};

export default NavPages;