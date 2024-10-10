import React from "react";
import { Outlet } from "react-router-dom"; 
import PageHeader from "../components/PageHeader";
 
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
          <PageHeader />
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutPage;
