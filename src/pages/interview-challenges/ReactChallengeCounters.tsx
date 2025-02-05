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
              <h3>Part 1</h3>
            </div>
            <div className="card-body">
              <p>
                Create a counter component containing a <b>display</b> and{" "}
                <b>2 buttons</b>, then place it on the main stage.
              </p>

              <div className="row">
                <div className="col">
                  <h3>Anatomy</h3>
                  <ol className="list-align-left">
                    <li>
                      The display is initialized at <b>zero (0)</b>.
                    </li>
                    <li>
                      The first button is labelled as <b>plus (+)</b>.
                    </li>
                    <li>
                      The second button is labelled as <b>minus (-)</b>.
                    </li>
                  </ol>
                </div>

                <div className="col">
                  <h3>Behaviour</h3>
                  <ol className="list-align-left">
                    <li>
                      Clicking the <b>plus (+)</b> button increments the display
                      by <b>1</b>.
                    </li>
                    <li>
                      Clicking the <b>minus (-)</b> button decrements the
                      display by <b>1</b>.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="card text-bg-light">
            <div className="card-header">
              <h3>Part 2</h3>
            </div>
            <div className="card-body">
              <p>
                Add a new button labelled <b>"Add counter"</b> to the main
                stage; then add a new <b>display</b> (we'll call it{" "}
                <b>"global display"</b>) besides the new counter.
              </p>

              <div className="row">
                <div className="col">
                  <h3>Anatomy</h3>
                  <ol className="list-align-left">
                    <li>
                      The <b>"global display"</b> and <b>"Add counter"</b>{" "}
                      button are global elements and shall be above the rest of
                      the components.
                    </li>
                    <li>
                      The <b>"global display"</b> is initialized at{" "}
                      <b>zero (0)</b>.
                    </li>
                  </ol>
                </div>

                <div className="col">
                  <h3>Behaviour</h3>
                  <ol className="list-align-left">
                    <li>
                      Clicking the <b>"Add counter"</b> button a new counter
                      dynamically on stage.
                    </li>
                    <li>
                      The <b>"global display"</b> will render the sum of all
                      counter displays.
                    </li>
                  </ol>
                </div>
              </div> 
            </div>
          </div>

<br />

<div className="card text-bg-light">
  <div className="card-header">
    <h3>Part 3: Jest test</h3>
  </div>
  <div className="card-body">
    <p>
      Write tests that check the counter:
    </p>
    <ol className="list-align-left">
          <li>
            <b>minus (-)</b> and <b>plus (+)</b> buttons work well
          </li>
          <li>
          The display is initialized at <b>zero (0)</b>, and updates when <b>minus (-)</b> and <b>plus (+)</b> buttons are pressed. 
          </li> 
        </ol>

    <p>
      Write tests that check the <b>"global display"</b> and <b>"Add counter"</b> buttons:
    </p>
    <ol className="list-align-left">
          <li>
            Clicking the <b>"Add counter"</b> increases the number of counters
          </li>
          <li>
            The <b>"global display"</b> is synchronized to the total count of all counters
          </li> 
        </ol>


  </div>
</div>
        </section>
      </div>

      <footer className="row challenge-footer">
        <div className="col">
          <a
            className="btn btn-secondary"
            href="#"
            target="_blank"
            rel="noopener"
          >
            See solution
          </a>
          <a
            className="btn btn-primary"
            href="https://stackblitz.com/fork/react-ts"
            target="_blank"
            rel="noopener"
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

export default ReactChallengeCounters;
