/**
 * Using the Render Props pattern to create this "Mouse Logger" functionality
 */

import React from "react";
import { useState, useEffect } from "react";

// Render functions
// ------------
const Render1 = ({ mousePosition }) => {
    return (
        <div className="CoordinatesMouseLogger">
            <p>Mouse position as coordinates</p>
            <div className="row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};
const Render2 = ({ mousePosition }) => {
    return (
        <div className="PointMouseLogger">
            <p>Mouse position as a point</p>
            <span>({mousePosition.x}, {mousePosition.y})</span>
        </div>
    );
};


// Encapsulating cross-cutting concerns
// ------------
// Encapsulation the event handler, state management, and returns a component enhanced with mouse positions
const ActionComponent = ({ renderMethod }) => {

    // Initiate mouse position and keeping it in the state
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
 
    useEffect(() => {
        const handleMousePositionChange = (e) => {
            // Set the state with current mouse position by reading
            // the information from the browser event object which
            // is passed as an argument to the callback
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        // Subscribe the function handler on mousemove
        window.addEventListener('mousemove', handleMousePositionChange);

        return () => { 
            // Removing subscriptions when the component unmounts
            window.removeEventListener('mousemove', handleMousePositionChange);
        };
    }, []); 

    return renderMethod({ mousePosition });
};


// Enhanced components
// ------------
// No need to create enhanced components here...

// Main Application
// ------------
const MouseLoggerRP = () => {
    return (
        <div className="AppDemoFrame">
            <header className="AppDemoFrame__header">
                <h5>"Mouse Logger" functionality using the <span className='utils-highlight'>Render Props</span> pattern</h5>
            </header>
            <div className='AppDemoFrame__wrapper'>
                <ActionComponent renderMethod={Render1} />
                <ActionComponent renderMethod={Render2} />
            </div>
        </div>
    );
};

export default MouseLoggerRP;