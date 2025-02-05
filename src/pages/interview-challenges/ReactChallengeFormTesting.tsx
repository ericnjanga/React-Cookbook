import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengeFormTesting = () => {
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
              Form testing (with Jest)
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Form testing (with Jest)</h1>
        <br />
        <br />
        <p>How would you test a React form component that:</p>
        <ul style={{ paddingLeft: "1.4rem" }}>
          <li>Has a text input field</li>
          <li>Validates required fields</li>
          <li>Calls onSubmit only when valid</li>
        </ul>

        <h2>Challenge</h2>
        <ul style={{ paddingLeft: "1.4rem" }}>
          <li>
            Write a unit test for this LoginForm component using Vitest or Jest.
          </li>
          <li>
            <b>Bonus:</b> How would you write an end-to-end test for this in
            Cypress/Playwright?
          </li>
        </ul>

        <div className="col">
          <div className="card text-bg-light">
            <div className="card-body">
              <pre>
                {`
                    const LoginForm = ({ onSubmit }) => {
                    const [email, setEmail] = React.useState("");

                    const handleSubmit = () => {
                      if (email) onSubmit(email);
                    };

                    return (
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Login</button>
                      </form>
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

export default ReactChallengeFormTesting;
