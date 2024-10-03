import React from "react";
import { NavLink } from 'react-router-dom';

const PageCategoryLogicEncapsulation = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `3.5rem`,
    };

    return (
        <>
            <div className="row">
                <h1>Logic encapsulation and code reuse patterns</h1>
            </div>

            <div style={spacinfStyle}></div>

            <div className="row">
                <ul>
                    <li>
                        <NavLink to="/high-order-components">High Order Components (HOC)</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hooks">Custom Hooks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/render-props">Render Props</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PageCategoryLogicEncapsulation;