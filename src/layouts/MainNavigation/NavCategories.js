import React, { useEffect, useState, createContext, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SectionUriContext } from "./NavSection";

export const CategoryContext = createContext({});


const NavCategories = ({ categoryIds, children }) => {
  const [cats, setCats] = useState([]);
  const sectionUri = useContext(SectionUriContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `/api/categories?ids=${JSON.stringify(categoryIds)}`
        );

        // Throws an error if there is an HTTP issue
        if (!response.ok) {
          throw new Error(`HTTP Error. Status: ${response.status}`);
        }
        // Otherwise, parse the response
        const data = await response.json();

        // Throws an error is the response structure is invalid
        if (!data || !data.categories) {
          throw new Error("Invalid data structure");
        }

        // Otherwise update the state
        setCats(data.categories);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, [categoryIds]);

  return cats.map((cat, index) => {
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
