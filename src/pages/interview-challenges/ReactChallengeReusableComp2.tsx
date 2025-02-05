import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengeReusableComp = () => {
  const root = "http://localhost:3000";

  return (
    <>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to={root}>Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to={`${root}/interview-challenges`}>
                Interview Challenges
              </NavLink>
            </li>
            <li className="breadcrumb-item">
              <NavLink to={`${root}/interview-challenges/react`}>React</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Reusable Components &amp; Design System (2)
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Reusable Components &amp; Design System (2)</h1>
        <br />
        <br />
        <p>How would you structure a component library to ensure:</p>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <ul style={{ paddingLeft: "1.4rem" }}>
                <li>Components are reusable and follow the design system?</li>
                <li>Styles are scoped correctly using CSS Modules?</li>
                <li>It’s easy to maintain and extend over time?</li>
                <li>
                  How would you document the components (e.g., Storybook)?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="row challenge-footer">
        <div className="col">
          <a
            className="btn btn-secondary"
            href="https://docs.google.com/document/d/1Vogth4TneO4A5LWpZ0-qC92mUUsLtOF-jibuK-6bQb0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            See solution
          </a>
          <a
            className="btn btn-primary"
            href="https://stackblitz.com/fork/react-ts"
            target="_blank"
            rel="noreferrer"
          >
            Start coding
          </a>
        </div>
      </footer>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ReactChallengeReusableComp;
