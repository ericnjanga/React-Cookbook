import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengeCiGitHubWorkflow = () => {
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
              CI/CD &amp; GitHub Workflow
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>CI/CD &amp; GitHub Workflow</h1>
        <br />
        <br />
        <p>
          Explain workflow strategies:
        </p>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <ul style={{ paddingLeft: "1.4rem" }}>
                <li>
                Branching strategies: feature branches, pull requests, merging strategies.
                </li>
                <li>Automating tests with Jenkins or GitHub Actions.</li>
                <li>Best practices for code reviews and commit messages.</li>
                <li>Best practices for code reviews and commit messages.</li>
                <li>Workflow for reviewing PRs and ensuring quality before merging.</li> 
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

export default ReactChallengeCiGitHubWorkflow;
