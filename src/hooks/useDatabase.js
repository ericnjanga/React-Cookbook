/**
 * ..
 * ...
 *
 */

import { useEffect, useState } from "react";

/**
 * - Responsible for fetching data from the "/api/definition"
 * TODO:
 * NEEDS TO BE OPTIMIZED FOR PERFORMANCE
 * @returns Promise containing either the successful data or and error object
 */
export const useDefinition = () => {
  const fetchDefinition = async (id) => {
    try {
      // Issue the API request and wait for the response ...
      const response = await fetch(`/api/definition/${id}`);

      // Handle http errors ...
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }

      // Once the response is available, parse it to json ...
      const data = await response.json();

      // Handle data structure errors ...
      if (!data || !data.definition) {
        throw new Error("The expected data structure was not received. Please try another query.");
      }

      // Place the result inside the returned promise ...
      return data.definition;
    } 
    
    // Place the error object inside the returned promise ...
    catch (error) { 
      return { title:'Oups, something went wrong!', description:error.message };
    }
  };

  return {
    fetchDefinition,
  };
};

/**
 * TODO: This hook needs to be tested to see if the API is called twice on the same "routeId"
 *
 * Fetches a page record from the database based on id
 * @param {*} id
 * @returns
 */
export const usePage = ({ id, sectionId } = {}) => {
  // Homepage will be the request by default
  const [page, setPage] = useState(null);

  const queryPageById = `/api/page/${id}`;
  const queryPageBySectionId = `/api/pageBySection/${sectionId}`;
  const queryUrl = id !== undefined ? queryPageById : queryPageBySectionId;

  if (id === undefined && sectionId === undefined) {
    throw new Error(
      `"id" and "sectionId" are undefined. Cannot query the page!`
    );
  }

  // console.log('----', id, routeId);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(queryUrl);

        // Throws an error if there is an HTTP issue
        if (!response.ok) {
          throw new Error(`HTTP Error. Status : ${response.status}`);
        }
        // Otherwise, parse the response
        const data = await response.json();

        // Throws an error is the response structure is invalid
        if (!data || !data.page) {
          console.log("---- data = ", data);
          throw new Error("Wrong data structure");
        }

        // Otherwise update the state
        setPage(data.page);
      } catch (error) {
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
        throw new Error("Invalid data structure");
      }

      // Otherwise update the state
      setSections(data.sections);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return sections;
};

export const useSectionBy = (sectionUri) => {
  const [section, setSection] = useState();

  const sectionFetch = async (sectionUri) => {
    try {
      const response = await fetch(`/api/sectionByUri/${sectionUri}`);
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }
      const data = await response.json();

      if (!data || !data.sections) {
        console.log(">>>>> data ", data);
        throw new Error("Invalid data structure");
      }

      setSection(data.sections[0]);
      console.log(">>>>> data.sections ", data.sections[0]);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    sectionFetch(sectionUri);
  }, [sectionUri]);

  return section;
};

export const useCategories = (categoryIds) => {
  const [cats, setCats] = useState([]);

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

  return cats;
};

export const usePages = (sectionId, categoryId) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(
          `/api/pages?sectionId=${sectionId}&categoryId=${categoryId}`
        );

        // Throws an error if there is an HTTP issue
        if (!response.ok) {
          throw new Error(`HTTP Error. Status: ${response.status}`);
        }
        // Otherwise, parse the response
        const data = await response.json();

        // Throws an error is the response structure is invalid
        if (!data || !data.pages) {
          throw new Error("Invalid data structure");
        }

        // Otherwise update the state
        setPages(data.pages);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPages();
  }, [sectionId, categoryId]);

  return pages;
};
