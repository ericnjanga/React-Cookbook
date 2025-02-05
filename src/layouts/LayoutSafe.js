import React from "react";
import { Outlet } from "react-router-dom";  
  
 
const LayoutSafe = () => {
 
  const page = null; 

  return (
    <div className="layout-subpage">
      <div className="row">
        <div className="col-9">
          ...
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutSafe;
