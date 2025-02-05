import React, { useEffect, useState, useContext } from "react";
import { useDefinition } from "../../hooks/useDatabase";
import { ContentContext } from "../../components/ModalModule";

/**
 * Get data from the API and simply renders it. Mostly used to render the same “definitions” that are also displayed in modals.
 * @param {*} param0 
 * @returns 
 */
const ContentFetcher = ({ id }) => {
  const [content, setContent] = useState({});
  const { fetchDefinition } = useDefinition(); 
  const { cacheProvider } = useContext(ContentContext);
  
 
 
  useEffect(() => {
    // 1) Make an API call if there is no cached content
    if (!cacheProvider.hasItem(id)) { 
      fetchDefinition(id)
      .then(result => { 
        // Save content at the state and cacheProvider leve
        setContent({ ...result }); 
        cacheProvider.saveItem(result);
      }); 
    } 
    
    // 2) Otherwise use cached content 
    else {
      const content = cacheProvider.getItem(id);
      setContent({ ...content });
    }

    return () => {
      console.log('Compoent unmounts ...');
    };

  }, [id, fetchDefinition, cacheProvider]);


  return (
    <section className="content-fetcher">
      <div className={!content ? 'placeholder body' : ''}> 
        {content && content.description && <div dangerouslySetInnerHTML={{ __html: content.description}}></div>
        }
      </div>
    </section>
  );
};

 

export default ContentFetcher; 