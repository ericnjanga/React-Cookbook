import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { usePage } from "../../hooks/useDatabase";
import useRouteSegments from "../../hooks/useRouteSegments"; 
import { CategoryContext } from "./NavCategories";
import { SectionUriContext } from "./NavSection";



const NavPages = ({ sectionId }) => {
    const [pages, setPages] = useState([]);
    const category = useContext(CategoryContext);
    const sectionUri = useContext(SectionUriContext);

    // console.log('......categoryId = ', categoryId, sectionId);


    // const activateLink = ({ isActive }) => (isActive ? "active" : null);
    // const hasReactSegment = useRouteSegments().includes("react");
  
    useEffect(() => {
      const fetchPages = async () => {
        try {
          const response = await fetch(`/api/pages?sectionId=${sectionId}&categoryId=${category.id}`);
  
          // Throws an error if there is an HTTP issue
          if(!response.ok) {
            throw new Error(`HTTP Error. Status: ${response.status}`);
          }
          // Otherwise, parse the response
          const data = await response.json();
  
          // Throws an error is the response structure is invalid
          if(!data || !data.pages) {
            throw new Error('Invalid data structure');
          }
  
          // Otherwise update the state
          setPages(data.pages);
        }
        catch(error) {
          console.error(error.message);
        }
      };
  
      fetchPages();
    }, [sectionId, category.id]);
  

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



  // const hasReactSegment = true;

  // console.log('....', category)

  // return (
  //   hasReactSegment && 
  //   <ul>
  //     {pages.map((page, index) => {

  //       return (
  //         <li key={index}>
  //           <NavPage {...page} section={section} category={category}></NavPage>
  //         </li> 
  //       );
  //     })}
  //   </ul>
  // );
};





export const NavPage = ({ title, pageUri, sectionUri }) => {
  // const sectionUri = section ? section.uri : '';
  // const categoryUri = category ? category.uri : '';
  // const pageyUri = page.uri;

  // to={`/${sectionUri}/${categoryUri}/${pageyUri}`}
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

  console.log('>>>>>>>>>>>>params = ', params ); 

  return (
    // <p>nav page</p>
    page!==null && <NavPage {...params} />
  );
};

export default NavPages;