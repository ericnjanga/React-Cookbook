import React from "react";
import { Outlet } from "react-router-dom";  
  
 
const LayoutSafe = () => {
   
  return (
    <div className="layout-subpage"> 
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutSafe;
