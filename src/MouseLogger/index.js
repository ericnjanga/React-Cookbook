import './styles.css';
import { useState, useEffect } from 'react';

// Encapsulating cross-cutting concerns
// HOC that returns a component enhanced with mouse positions
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

// Gets a mouse position, and renders it as a coordinate
const CoordinatesMouseLogger = ({ mousePosition }) => {
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
const PointMouseLogger = ({ mousePosition }) => {
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

// Creating two new enhanced component versions that will be aware of the mouse position data
const PanelMouseTracker = withMousePosition(CoordinatesMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function MouseLogger() {
    return (
        <div className="MouseLoggerApp">
            <header className="header">
                <h5>Panel Mouse Logger</h5>
            </header>

            {/** We will now have 2 different trackers that display the same information in different ways */}
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    );
}

export default MouseLogger;