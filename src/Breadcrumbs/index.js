import React from "react";
import { NavLink } from 'react-router-dom';

const activateLink = ({ isActive }) => ( isActive ? 'active' : null );

/**
 * 
 * @returns TODO:
 * - I must complete the React Router training before finishing up this component:
 * https://www.coursera.org/learn/learn-react-router-6/home/module/1
 */

const Breadcrumbs = () => {

    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <NavLink to="/" className={activateLink}>Home</NavLink>
                </li>
                <li class="breadcrumb-item">
                    <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">High Order Components (HOC) ...</li>
            </ol>
        </nav>


 
        // <nav aria-label="breadcrumb">
        //     <ol class="breadcrumb">
        //         <li class="breadcrumb-item">
        //             <NavLink to="/" className={activateLink}>Home</NavLink>
        //         </li>
        //         <li class="breadcrumb-item">
        //             <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
        //         </li>
        //     </ol>
        // </nav> 


 
        // <nav aria-label="breadcrumb">
        //     <ol class="breadcrumb">
        //         <li class="breadcrumb-item">
        //             <NavLink to="/" className={activateLink}>Home</NavLink>
        //         </li>
        //         <li class="breadcrumb-item">
        //             <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
        //         </li>
        //         <li class="breadcrumb-item active" aria-current="page">Hooks</li>
        //     </ol>
        // </nav> 
    );
}

export default Breadcrumbs;