import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallangeLanding = () => {
  const root = "http://localhost:3000";

  return (
    <>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to={root}>Home</NavLink>
            </li>
            <li className="breadcrumb-item">Interview Challenges</li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Interview Challenges</h1>
        <br />
        <br />
        <section>
          <ol className="list-align-left">
            <li>
              <NavLink to={`${root}/interview-challenges/react`}>React challenges</NavLink>
            </li>
            <li>
              <NavLink to={`${root}/interview-challenges/react`}>JavaScript challenges</NavLink>
            </li>
            <li>
              <NavLink to={`${root}/interview-challenges/react`}>Accessibility challenges</NavLink>
            </li>
            <li>
              <NavLink to={`${root}/interview-challenges/react`}>CSS challenges</NavLink>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default ReactChallangeLanding;
