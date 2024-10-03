import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { NavLink } from "react-router-dom";

const activateLink = ({ isActive }) => (isActive ? "active" : null);

const PageCodingPatternsJs = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="row">
        <div className="col-9">
          <header className="sc-block-mg-bot-2">
            <h1>JavaScript coding patterns</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum
              bibendum pharetra massa facilisis scelerisque tempor in. Commodo
              pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam
              sed nunc accumsan. Eu id nulla est diam.
            </p>
          </header>

        </div>
      </div>
    </>
  );
};

export default PageCodingPatternsJs;
