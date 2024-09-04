/**
 * Using the High Order Compoments pattern to create this "Mouse Logger" functionality
 */

import { useState, useEffect } from 'react';

// Render functions
// ------------
// Gets a mouse position, and renders it as a coordinate
const Render1 = ({ mousePosition }) => {
    if (!mousePosition) { // Will not render anything if the mouse position is not provided
        return null;
    }

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

// Gets a mouse position, and renders it as a point
const Render2 = ({ mousePosition }) => {
    if (!mousePosition) { // Will not render anything if the mouse position is not provided
        return null;
    }

    return (
            <div className="PointMouseLogger">
                <p>Mouse position as a point</p>
                <span>({mousePosition.x}, {mousePosition.y})</span>
            </div>
    );
};


// Encapsulating cross-cutting concerns
// ------------
// HOC that encapsulates the event handler, state management, and returns a component enhanced with mouse positions
const withMousePosition = (WrappedComponent) => {
    return (props) => {

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

        return (
            <WrappedComponent {...props} mousePosition={mousePosition} />
        );
    };
};


// Enhanced components
// ------------
// Creating two new enhanced component versions that will be aware of the mouse position data
const NewComp1 = withMousePosition(Render1);
const NewComp2 = withMousePosition(Render2);


// Main Application
// ------------
function MouseLoggerHOC() {
    return (
        <div className="MouseLoggerHOCApp AppDemoFrame">
            <header className="AppDemoFrame__header">
                <h5>"Mouse Logger" functionality using the <span className='utils-highlight'>High Order Component</span> pattern</h5>
            </header>

            {/** We will now have 2 different trackers that display the same information in different ways */}
            <div className='AppDemoFrame__wrapper'>
                <NewComp1 />
                <NewComp2 /> 
            </div>
        </div>
    );
}

export default MouseLoggerHOC;