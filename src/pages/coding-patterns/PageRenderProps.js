import React from "react";
import AbstractRenderingRP from "../../components/AbstractRenderingRP";
import MouseLoggerRP from "../../components/MouseLogger/mouse-logger-pattern-RP";
import { Badge } from "@chakra-ui/react";

const PageRenderProps = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `2.0rem`,
    };

    return (
        <>
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
                <p>Using the <Badge>Render Props</Badge> pattern to render two different components with the same business logic.</p>
                <AbstractRenderingRP />
            </div>

            <div style={spacinfStyle}></div>

            <div className="row"> 
                <h3>Example 2</h3>
                <p>Using the <Badge>Render Props</Badge> pattern to create the "Mouse Logger" functionality.</p>
                <MouseLoggerRP />
            </div>
        </>
    );
};

export default PageRenderProps;