import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import AbstractRendering from "./AbstractRendering";

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
                
                <br />


                <h3>Example</h3>
                <p>We have two comcponents that use the same fetching functionality to fetch two different types of data, 
                    and renders them in two different ways.</p>
            </div>

            <div style={spacinfStyle}></div>

            <div className="row">
                <AbstractRendering />
            </div>
        </>
    );
};

export default PageRenderProps;