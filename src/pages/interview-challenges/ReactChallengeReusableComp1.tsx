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
              Reusable Components &amp; Design System (1)
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Reusable Components &amp; Design System (1)</h1>
        <br />
        <br />
        <p>
          Write a Button component that is <b>reusable</b>, <b>scalable</b>, and <b>maintenable</b>.
        </p>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <ul style={{ paddingLeft: "1.4rem" }}>
                <li>Uses TypeScript for type safety.</li>
                <li>Supports multiple variants (primary, secondary, success, danger, warning, info, light, dark, link).</li>
                <li>Allows different sizes (small, medium, large).</li>
                <li>Uses CSS Modules to scope styles.</li>
                <li>Supports native button props (onClick, disabled, etc.).</li> 
                <li>Supports rendering as "&lt;button&gt;" and "&lt;a&gt;".</li> 
                <li>Allows additional className for custom styling.</li> 
                <li>Write 3 <b>Jest</b> test</li> 
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="row challenge-footer">
        <div className="col">
          <a
            className="btn btn-secondary"
            href="https://chatgpt.com/c/67a2548a-0074-8001-8d9f-a4fb458e11f1"
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
