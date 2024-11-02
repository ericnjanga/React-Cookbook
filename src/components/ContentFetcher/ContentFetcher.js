import React, { useEffect, useState } from "react";
import { useDefinition } from "../../hooks/useDatabase";

/**
 * Get data from the API and simply renders it. Mostly used to render the same “definitions” that are also displayed in modals.
 * @param {*} param0 
 * @returns 
 */
const ContentFetcher = ({ id }) => {
  const [content, setContent] = useState({});
  const { fetchDefinition } = useDefinition(); 

  console.log('>>>>>ContentFetcher', content);
 
  useEffect(() => {
    fetchDefinition(id)
    .then(result => {
      setContent((prevResult) => ({
        ...prevResult,
        ...result
      }));
    }); 
  }, [id, fetchDefinition]);


  return (
    <section className="content-fetcher">
      <div className={!content ? 'placeholder body' : ''}> 
        {content && content.description}
      </div>
    </section>
  );
};

export default ContentFetcher; 