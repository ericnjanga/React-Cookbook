import React from "react";

const ReactChallenge = () => {
  return (
    <>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Interview Challenges</a>
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
        <br />
        <section>
          <h2>Challenge 1: The counter</h2>
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
                      Clicking the <b>plus (+)</b> button increments the display by{" "}
                      <b>1</b>.
                    </li>
                    <li>
                      Clicking the <b>minus (-)</b> button decrements the display by{" "}
                      <b>1</b>.
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
                Add a new button labelled <b>"Add counter"</b> to the main stage; then add a new <b>display</b> (we'll call it <b>"global display"</b>) besides the new counter.
              </p> 


              <div className="row">
                <div className="col">
                  <h3>Anatomy</h3>
                  <ol className="list-align-left">
                    <li>
                      The <b>"global display"</b> and <b>"Add counter"</b> button are global elements and shall be above the rest of the components.
                    </li>
                    <li>
                      The <b>"global display"</b> is initialized at <b>zero (0)</b>.
                    </li> 
                  </ol>
                </div>

                <div className="col">
                  <h3>Behaviour</h3>
                  <ol className="list-align-left">
                    <li>
                      Clicking the <b>"Add counter"</b> button a new counter dynamically on stage.
                    </li>
                    <li>
                      The <b>"global display"</b> will render the sum of all counter displays.
                    </li>
                  </ol>
                </div>
              </div>


              {/* <h3>Behaviour</h3>
                  <ol className="list-align-left">
                    <li>
                    Pressing this button adds an additional counter on stage.
                    </li>
                    <li>
                      Clicking the <b>minus (-)</b> decrements the display by{" "}
                      <b>1</b>.
                    </li>
                  </ol> */}
 
            </div>
          </div>
 

        </section>
      </div>
    </>
  );
};

export default ReactChallenge;
