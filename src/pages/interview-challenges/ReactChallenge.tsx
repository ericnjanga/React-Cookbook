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
          <p>
            Skill and knowledge test in React. Each test, though focused on
            specific aspects of React will also test various aspects of your
            skills (TypeScript,{" "}
            <a
              href="https://chatgpt.com/share/67a4f510-f420-8001-a1dc-258866a1bdb9"
              target="_blank"
            >
              Accessibility
            </a>
            , Unit testing, ...)
          </p>
          <ol className="list-align-left">
            <li>
              <NavLink to={`${root}/interview-challenges/react/counters`}>
                Counters
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
            <li>
              <a
                href="https://chatgpt.com/share/67a4b8ca-274c-8001-9b8d-2a6f618cd47a"
                target="_blank"
              >
                Full Component Lifecycle Review
              </a>
            </li>
          </ol>

          <h3>Accessibility</h3>
          <ol className="list-align-left">
            <li>
              <a
                href="https://chatgpt.com/c/67a3ec6f-8254-8001-9169-702b8ef65327"
                target="_blank"
              >
                Accessibility Review
              </a>
            </li>
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/modal-accessibility`}
              >
                Modal (Accessibility)
              </NavLink>
            </li>
          </ol>

          <h3>Context API</h3>
          <ol className="list-align-left">
            <li>
              <a
                href="https://chatgpt.com/share/67a4b834-f13c-8001-a249-27cc1f91179e"
                target="_blank"
              >
                Theme Switcher with Context API (Jest API test)
              </a>
            </li>
            <li>
              <a
                href="https://chatgpt.com/c/67a77995-061c-8001-84ea-8604cfa4e66c"
                target="_blank"
              >
                Multi-Step Form with Context API
              </a>
            </li>
          </ol>

          <h3>Performance optimization, preventing unnecessary re-renders</h3>
          <ol className="list-align-left">
            <li>
              <NavLink
                to={`${root}/interview-challenges/react/performance-hooks-1`}
              >
                Perforance hooks (1)
              </NavLink>
            </li>
          </ol>

          <h3>Component lifecycle</h3>
          <ol className="list-align-left">
            <li>
              <NavLink
                to="https://chatgpt.com/c/67a4b89f-3fe8-8001-b882-2d1641c21463"
                target="_blank"
              >
                Component lifecycle (1)
              </NavLink>
            </li>
          </ol>

          <h3>Refs: DOM manipulation, persistent values without re-rendr</h3>
          <ol className="list-align-left">
            <li>
              <NavLink
                to="https://chatgpt.com/c/67aa57bf-0628-8001-89c9-acd9acc4a240"
                target="_blank"
              >
                Interactive video player component
              </NavLink>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default ReactChallenge;
