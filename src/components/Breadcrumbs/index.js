import React from "react";
import { NavLink } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';

const activateLink = ({ isActive }) => ( isActive ? 'active' : null );

/**
 * 
 * @returns TODO:
 * - I must complete the React Router training before finishing up this component:
 * https://www.coursera.org/learn/learn-react-router-6/home/module/1
 */

const Breadcrumbs = () => {

    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink as={NavLink} to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={NavLink} to="/category-logic-enpasulation">Logic enpasulation</BreadcrumbLink>
            </BreadcrumbItem>

            {/* <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={NavLink} to="/">Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem> */}
        </Breadcrumb>

        // <nav aria-label="breadcrumb">
        //     <ol className="breadcrumb">
        //         <li className="breadcrumb-item">
        //             <NavLink to="/" className={activateLink}>Home</NavLink>
        //         </li>
        //         <li className="breadcrumb-item">
        //             <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
        //         </li>
        //         <li className="breadcrumb-item active" aria-current="page">High Order Components (HOC) ...</li>
        //     </ol>
        // </nav>


 
        // <nav aria-label="breadcrumb">
        //     <ol className="breadcrumb">
        //         <li className="breadcrumb-item">
        //             <NavLink to="/" className={activateLink}>Home</NavLink>
        //         </li>
        //         <li className="breadcrumb-item">
        //             <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
        //         </li>
        //     </ol>
        // </nav> 


 
        // <nav aria-label="breadcrumb">
        //     <ol className="breadcrumb">
        //         <li className="breadcrumb-item">
        //             <NavLink to="/" className={activateLink}>Home</NavLink>
        //         </li>
        //         <li className="breadcrumb-item">
        //             <NavLink to="/category-logic-enpasulation" className={activateLink}>Logic enpasulation</NavLink>
        //         </li>
        //         <li className="breadcrumb-item active" aria-current="page">Hooks</li>
        //     </ol>
        // </nav> 
    );
}

export default Breadcrumbs;