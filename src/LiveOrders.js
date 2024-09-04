import React from "react";


const Row = ({ children, spacing }) => {

    const childStyle = {
        // using string interpolation to set the margin
        marginLeft: `${spacing}px`,
    };


    return (
        <div className="app-liveOrder__row">
            {/* Iterate through each child */}
            {React.Children.map(children, (child, index) => {

                /* The style needs to be attached as a prop to each child. 
                That's why we need to return a new copy of the element */
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style,               // merge previous style
                        ...(index > 0 ? childStyle : {})    // merge the childStyle object that contains the margin left (only if it's not the 1st element)
                    }
                });
            })}
        </div>
    );
};

const LiveOrder = () => {
    return (
        <div className="app-liveOrder">
            <Row spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>30$</p>
                <p>17:30</p>
                <p>John</p>
            </Row>
        </div>
    );
};

export default LiveOrder;