import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengeModal = () => {
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
              Modal (Accessibility)
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Modal (Accessibility)</h1>
        <br />
        <br />
        <p>
          You’re reviewing a component for accessibility. What issues do you see
          in this implementation?
        </p>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <pre>
                {`
        const Modal = ({ isOpen, onClose }) => {
            if (!isOpen) return null;

            return (
              <div className="modal">
                <div className="content">
                  <h2>Modal Title</h2>
                  <button onClick={onClose}>Close</button>
                </div>
              </div>
            );
          };
        `}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <footer className="row challenge-footer">
        <div className="col">
          <a
            className="btn btn-secondary"
            href="https://chatgpt.com/share/67a3be6c-ccf0-8001-aefb-2a85c4314f84"
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

export default ReactChallengeModal;
