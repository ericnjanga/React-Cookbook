import React, { useContext } from "react"; 
import { PageContext } from "./Breadcrumbs";

const PageHeader = () => {
  const page = useContext(PageContext);

  // console.log('&&&&', page)
  return ( 
    <header className="sc-block-mg-bot-2">
      <h1 className={!page ? 'placeholder heading' : ''}>{page && page.title}</h1>
      <p className={!page ? 'placeholder text' : ''}>{page && page.subtitle}</p>
    </header>
  );
};

export default PageHeader;
