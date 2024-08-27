import React from "react";
import { NavLink } from 'react-router-dom';

const activateLink = ({ isActive }) => ( isActive ? 'active' : null );

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={activateLink}>Dynamic JSX</NavLink> {/* /dynamic-jsx */}
                </li> 
                <li>
                    <NavLink to="/hooks" className={activateLink}>Hooks</NavLink>
                </li>
                <li>
                    <NavLink to="/forms" className={activateLink}>Forms</NavLink>
                </li>
                <li>
                    <NavLink to="/component-composition" className={activateLink}>Component Composition</NavLink>
                </li>
                <li>
                    <NavLink to="/data-fetching" className={activateLink}>Data Fetching</NavLink>
                </li> 
            </ul>
        </nav>
    );
};

export default Nav;