import React from 'react';
import LiveOrder from './LiveOrders';


const PageDynamicJsx = () => {

    return (
        <>
            <div className="row">
                <h1>Manipulating children <span className="utils-highlight">dynamically</span> in JSX</h1>
            </div>
            <div className="row">
                <h3>The problem</h3>
                <p>We need to apply custom styles to the children elements of a "Row" component 
                    <span className="utils-highlight">without having to modify the original JSX markup</span>. 
                    To solve this problem, we will use <pre><a href="https://react.dev/reference/react/Children" target="_blank">React.Children()</a></pre> map function to loop through 
                    every child of component, and <pre><a href="https://react.dev/reference/react/cloneElement" target="_blank">React.cloneElement</a></pre> to return a new copy of the 
                    element to which we will apply the new styles.</p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            
            <div className="row">
                <h3>Code output</h3>
                <LiveOrder />
            </div>
        </>
    );
};

export default PageDynamicJsx;



