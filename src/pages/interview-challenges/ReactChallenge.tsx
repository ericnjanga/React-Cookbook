import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallenge = () => {
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
            <li className="breadcrumb-item active" aria-current="page">
              React
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>React Interview Challenges</h1>
        <br />
        <br />
        <section>
          <p>React projects with TypeScript.</p>
          <ol className="list-align-left">
            <li>
              <NavLink to={`${root}/interview-challenges/react/counters`}>
                Counters
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/modal-accessibility`}
              >
                Modal (Accessibility)
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/performance-hooks-1`}
              >
                Perforance hooks (1)
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/cicd-git-workflow`}
              >
                CI/CD &amp; GitHub Workflow
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/rest-api-async-code`}
              >
                REST APIs &amp; Asynchronous Code
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/reusable-components-design-system-1`}
              >
                Reusable Components &amp; Design System (1)
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/reusable-components-design-system-2`}
              >
                Reusable Components &amp; Design System (2)
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/form-testing-jest`}
              >
                Form testing (with Jest)
              </NavLink>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default ReactChallenge;
