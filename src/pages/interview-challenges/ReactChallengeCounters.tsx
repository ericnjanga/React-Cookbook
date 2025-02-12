import React from "react";
import { NavLink } from "react-router-dom";

const ReactChallengeCounters = () => {
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
              Counters
            </li>
          </ol>
        </nav>
      </div>

      <br />

      <div className="row">
        <h1>Counters</h1>
        <br />
        <br />
        <section>
          <div className="card text-bg-light">
            <div className="card-header">
              <h3>Part 1: xxx</h3>
            </div>
            <div className="card-body">
              <h3>Part 1</h3>
              <ol className="list-align-left">
                <li>
                  Create a counter component rendering 1 small{" "}
                  <b>heading initialized to "0"</b> and 2 buttons, one{" "}
                  <b>"-"</b>, and one <b>"+"</b>.
                </li>
                <li>
                  Clicking the <b>"+"</b> button increments the display by{" "}
                  <b>1</b>. Clicking the <b>"-"</b>, button decrements the
                  display by <b>1</b>.
                </li>
              </ol>
              <p></p>

              <br />

              <h3>Part 2</h3>
              <ol className="list-align-left">
                <li>
                  Create the functionality to <b>add</b> and <b>remove</b> as
                  many counter on stage.
                </li>
                <li>
                  Create the functionality to display a <b>grand total</b>,
                  which is the sum of all counters on stage.
                </li>
                <li>
                  Create the functionality to apply a{" "}
                  <b>random background color</b> to each newly added counter.
                </li>
              </ol>
              <p>
                <b>Note:</b> A minimum of 1 counter should always be on stage.
              </p>
            </div>
          </div>

          <br />

          <div className="card text-bg-light">
            <div className="card-header">
              <h3>Part 2: Code optimization</h3>
            </div>
            <div className="card-body">
              <p>
                Make sure there is no <b>unnecessary re-render</b> and <b>unnecessary re-calculations</b>.
              </p>
            </div>
          </div>

          <br />

          <div className="card text-bg-light">
            <div className="card-header">
              <h3>Part 3: Accessibility</h3>
            </div>
            <div className="card-body">
              <p>
                Ensure the full application fulfills{" "}
                <NavLink
                  to="https://chatgpt.com/share/67a4f510-f420-8001-a1dc-258866a1bdb9"
                  target="_blank"
                >
                  <b>AA</b> and <b>AAA</b> Accessibility standards
                </NavLink>{" "}
                and explain your evaluation process. For example, when applying
                an accessibility feature, explain Accessibility standard you are
                matching.
              </p>
            </div>
          </div>

          <br />

          <div className="card text-bg-light">
            <div className="card-header">
              <h3>Part 4: Jest test</h3>
            </div>
            <div className="card-body">
              <p>Write tests that check the counter:</p>
              <ol className="list-align-left">
                <li>
                  <b>minus (-)</b> and <b>plus (+)</b> buttons work well
                </li>
                <li>
                  The display is initialized at <b>zero (0)</b>, and updates
                  when <b>minus (-)</b> and <b>plus (+)</b> buttons are pressed.
                </li>
              </ol>

              <p>
                Write tests that check the <b>"global display"</b> and{" "}
                <b>"Add counter"</b> buttons:
              </p>
              <ol className="list-align-left">
                <li>
                  Clicking the <b>"Add counter"</b> increases the number of
                  counters
                </li>
                <li>
                  The <b>"global display"</b> is synchronized to the total count
                  of all counters
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      <footer className="row challenge-footer">
        <div className="col">
          <NavLink
            className="btn btn-secondary"
            to="https://chatgpt.com/c/67abde3b-b5d4-8001-a274-2110fe169254"
            target="_blank"
            rel="noopener"
          >
            See solution
          </NavLink>
          <NavLink
            className="btn btn-primary"
            to="https://stackblitz.com/fork/react-ts"
            target="_blank"
            rel="noopener"
          >
            Start coding
          </NavLink>
        </div>
      </footer>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ReactChallengeCounters;
