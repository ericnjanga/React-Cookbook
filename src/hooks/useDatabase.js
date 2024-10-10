/**
 * TODO:
 * THIS CUSTOM HOOK NEEDS TO BE REFACTORED
 * ..
 * ...
 * 
 */

import { useEffect, useState } from "react";



/**
 * TODO: This hook needs to be tested to see if the API is called twice on the same "routeId"
 * 
 * Fetches a page record from the database based on id
 * @param {*} id
 * @returns 
 */
export const usePage = ({ id, sectionId } = {}) => { // Homepage will be the request by default
  const [page, setPage] = useState(null); 
 
  const queryPageById = `/api/page/${id}`;
  const queryPageBySectionId = `/api/pageBySection/${sectionId}`;
  const queryUrl = id !== undefined ? queryPageById : queryPageBySectionId;

  if (id===undefined && sectionId===undefined) { 
    throw new Error(`"id" and "sectionId" are undefined. Cannot query the page!`);
  }

  // console.log('----', id, routeId); 

  useEffect(() => {
    const fetchPage = async() => {
      try {
        const response = await fetch(queryUrl);

        // Throws an error if there is an HTTP issue
        if(!response.ok) {
          throw new Error(`HTTP Error. Status : ${response.status}`);
        }
        // Otherwise, parse the response
        const data = await response.json();

        // Throws an error is the response structure is invalid
        if(!data || !data.page) {
          console.log('---- data = ', data); 
          throw new Error('Wrong data structure');
        }

        // Otherwise update the state
        setPage(data.page); 
      } 
      catch(error) {
        console.error(error.message);
      }
    };

    fetchPage();
  }, [queryUrl]);

  return page;
};



/**
 * TODO: This hook needs to be tested for performance
 * Fetches all page sections from the database
 * @returns 
 */
export const useSections = () => {
  const [sections, setSections] = useState([]);

  const fetchSections = async () => {
    const response = await fetch("/api/sections");

    try {
      // Throws an error if there is an HTTP issue
      if (!response.ok) {
        throw new Error(`HTTP Error. Status : ${response.status}`);
      }
      // Otherwise, parse the response
      const data = await response.json();

      // Throws an error is the response structure is invalid
      if (!data || !data.sections) {
        throw new Error('Invalid data structure');
      }

      // Otherwise update the state
      setSections(data.sections);
    }
    catch(error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return sections;
}



// <header className="sc-block-mg-bot-2">
// <h1 className={!page ? 'placeholder heading' : ''}>{page && page.title}</h1>
// <p className={!page ? 'placeholder text' : ''}>{page && page.subtitle}</p>
// </header>