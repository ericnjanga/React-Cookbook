import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import AbstractRenderingRP from "./AbstractRenderingRP";
import MouseLoggerRP from "./MouseLogger/mouse-logger-pattern-RP";

const PageRenderProps = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `2.0rem`,
    };

    return (
        <>
            <Breadcrumbs />

            <div className="row">
                <h1>Flexible rendering (Render props)</h1>
                <h3>Problem</h3>
                <p>We need to reuse the same data fetching logic in components that render the data differently.</p>
                
                <br />

                <h3>Solution</h3>
                <p>First, we encapsulate the data fetching functionality into a component that returns a 
                    call to an abstract render function. Next, using component composition, we render 
                    the data fetching component into a new component, and provide as a props a unique render function.</p>
            </div>

            <div className="row"> 
                <h3>Example 1</h3>
                <p>Using the <span className='utils-highlight'>Render Props</span> pattern to render two different components with the same business logic.</p>
                <AbstractRenderingRP />
            </div>

            <div style={spacinfStyle}></div>

            <div className="row"> 
                <h3>Example 2</h3>
                <p>Using the <span className='utils-highlight'>Render Props</span> pattern to create the "Mouse Logger" functionality.</p>
                <MouseLoggerRP />
            </div>
        </>
    );
};

export default PageRenderProps;