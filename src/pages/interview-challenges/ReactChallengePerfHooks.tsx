import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengePerfHooks = () => {
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
              Perforance hooks (1)
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Perforance hooks (1)</h1>
        <br />
        <br />
        <p>
          Explain the difference between <b>React.memo</b>, <b>useMemo</b>, and{" "}
          <b>useCallback</b> hooks.
        </p>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <p>For each hook:</p>
              <ol style={{ paddingLeft: "1.4rem" }}>
                <li>
                  Create a small application without the hook, and explain{" "}
                  <b>what we are missing by not using the hook</b>.
                </li>
                <li>Modify your application by using the hook <b>and explain the difference</b>. Show {' '}
                <a href="https://chatgpt.com/c/67a74ef2-34e4-8001-b2e4-abb9dbe81762" target="_blank">how they purify the component</a>.
                
                
                </li>
                <li>Conclude by giving us a general use case for this hook.</li>
              </ol>
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

export default ReactChallengePerfHooks;
