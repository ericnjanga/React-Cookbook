import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengeRestApiAsync = () => {
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
              REST APIs &amp; Asynchronous Code
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>REST APIs &amp; Asynchronous Code</h1>
        <br />
        <br />
        <p>
          React small component fetching data from a{" "}
          <a
            href="https://jsonplaceholder.typicode.com/users"
            target="_blank"
            rel="noopener"
          >
            user REST API
          </a>.
        </p>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <ul style={{ paddingLeft: "1.4rem" }}>
                <li>
                  Optimize the component for performance
                </li>
                <li>Handle API errors gracefully</li>
                <li>Cache the response for better performance</li>
                <li>Test your component with Jest</li>
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

export default ReactChallengeRestApiAsync;
