import React from "react";
import { Outlet } from "react-router-dom";
// import { usePage } from "../hooks/useDatabase";


export const LayoutTemp = () => {
  return (
    <div className="layout-temporary">
      <Outlet></Outlet>
    </div>
  );
};


const LayoutPage = () => {
  /**
   * NOTE: For now, I'm going to hardcode the Id just for testing purpose.
   * --> My idea is to make sure usePage() API request is only called when the ID is changed
   */
  // const page = usePage({ id: 19 });
  const page = null;

  return (
    <div className="layout-subpage">
      <div className="row">
        <div className="col-9">
          <header className="sc-block-mg-bot-2">
            <h1 className={!page ? 'placeholder heading' : ''}>{page && page.title}</h1>
            <p className={!page ? 'placeholder text' : ''}>{page && page.subtitle}</p>
          </header>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutPage;
