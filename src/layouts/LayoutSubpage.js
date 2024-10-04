import React from "react";
import { Outlet } from "react-router-dom";

const LayoutSubpage = () => {

  return (
    <div className="layout-subpage">
      <div className="row">
        <div className="col-9">
          <header className="mb-4">
            <h1>... Title ...</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum
              bibendum pharetra massa facilisis scelerisque tempor in. 
            </p>
          </header>

        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutSubpage;