import React from "react";
import { NavLink } from 'react-router-dom';
import MouseLoggerHOC from "./components/MouseLogger/mouse-logger-pattern-HOC";
import Breadcrumbs from "./components/Breadcrumbs";
import { Link, Badge } from '@chakra-ui/react';

const PageHighOrderComponents = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `3.5rem`,
    };

    return (
        <>
            <Breadcrumbs />

            <div className="row">
                <h1>Enhancing or extending the capabilities of a component provided</h1>
            </div>


            <div className="row">
                <h3>Example: A mouse position tracking application</h3>
                <p>We are using a High Order Component (HOC) to encapsulate the logic and state to track the cursor position of visitors. We will showcase two different presentational components that will consume that data (tracking position) and present it in different ways.</p>

                <br />

                <MouseLoggerHOC />
            </div>

            <div style={spacinfStyle}></div>
            
            <div className="row">
                <h3>The problem</h3>
                <p>We need to create a generic functionality that is not related to the application's business logic and that is 
                    needed in many places. For example, let's say we have a pattern occuring over and over again in our application 
                    that <Badge>subscribes to a data source</Badge> and 
                    <Badge>sets the local state with new data</Badge>. 
                    <b>How can we encapsulate that logic for easy reuse all over the application?</b>
                </p>
            
                <h4>An unperfect solution</h4>
                <p>
                    <NavLink to="/hooks">Custom Hooks</NavLink> are a possible solution to the problem. However, that introduces the issue of having to alter the implementation of each component that needs data and thus making them stateful (which is counterproductive).
                </p>


                <h3>A better solution: High Order Components (HOC)</h3>
                <p>Coming back to the subscription logic issue described earlier, 
                    
                    
                    <Link href="https://legacy.reactjs.org/docs/higher-order-components.html" isExternal>High Order Components (HOC) 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0d6efd"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                    </Link>
                    
                    encapsulate the logic in a single place that is shared by many components while remaining unchanged and stateless.
                </p>
            </div> 
        </>
    )
};

export default PageHighOrderComponents;