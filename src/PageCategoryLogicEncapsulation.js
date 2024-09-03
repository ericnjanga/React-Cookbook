import React from "react";
import { NavLink } from 'react-router-dom';

const activateLink = ({ isActive }) => ( isActive ? 'active' : null );

const PageCategoryLogicEncapsulation = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `3.5rem`,
    };

    return (
        <>
            <div className="row">

                {/*  --- Breadcrumb Component */}
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <NavLink to="/" className={activateLink}>Home</NavLink>
                        </li>
                        <li class="breadcrumb-item">
                            <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
                        </li>
                    </ol>
                </nav>
                {/*  --- Breadcrumb Component */}
             
                <h1>Logic encapsulation patterns</h1>
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
                </ul>
            </div>
        </>
    );
};

export default PageCategoryLogicEncapsulation;