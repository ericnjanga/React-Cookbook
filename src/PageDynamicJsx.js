import React from 'react';
import LiveOrder from './LiveOrders';
import FeedbackRadioGroup from './FeedbackRadioBtn';


const PageDynamicJsx = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `3.5rem`,
    };

    return (
        <>
            <div className="row">
                <h1>Manipulating children <span className="utils-highlight">dynamically</span> in JSX</h1>
            </div>
            <div className="row">
                <h3>The problem</h3>
                <p>We need to apply custom styles to the children elements of a "Row" component 
                    <span className="utils-highlight">without having to modify the original JSX markup</span>. 
                    To solve this problem, we will use <span className="code"><a href="https://react.dev/reference/react/Children" target="_blank">React.Children()</a></span> API map function to loop through 
                    every child of component, and <span className="code"><a href="https://react.dev/reference/react/cloneElement" target="_blank">React.cloneElement</a></span> API to return a new copy of the 
                    element to which we will apply the new styles.</p>
            </div>

            <div style={spacinfStyle}></div>
            
            <div className="row">
                <h3>Code output 1</h3>
                <LiveOrder />
            </div>

            <div style={spacinfStyle}></div>

            <div className="row">
                <div className="col">
                    <h3>Code output 2</h3>
                    <p className="mb-3">We generate the radio group below by encapsulating the core functionalities 
                        into 2 components: <span className="code">RadioGroup</span> and 
                        <span className="code">RadioOption</span>. Next, we use <span className="code">RadioGroup</span> 
                        to dynamically modify its children properties, which makes for a much clearner and flexible code implementation.</p>
                    <FeedbackRadioGroup />
                </div>
            </div>

            <div style={spacinfStyle}></div>
            
            <div className="row">
                <div className="col">
                    <div className="alert alert-info" role="alert">
                        <h5>Code sample</h5>
                        <p><a href="https://github.com/ericnjanga/React-Cookbook/blob/main/src/LiveOrders.js" target="_blank">See the code on GitHUb</a></p>
                    </div>
                </div>
            </div>


            
            
        </>
    );
};

export default PageDynamicJsx;



