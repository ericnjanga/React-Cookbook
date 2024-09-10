import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpenseTracker from './ExpenseTracker';
import CustomHookTest from './CustomHookTest';
import DaysOfTheWeek from './DaysOfTheWeek';
import Breadcrumbs from "./components/Breadcrumbs";

const activateLink = ({ isActive }) => ( isActive ? 'active' : null );

const PageHooks = () => {
    return ( 
        <>
            <Breadcrumbs />

            <div className="row">
                <h1>React Hooks</h1>
            </div>
            <div className="row mb-4">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                        <span className="badge badge-success">useReducer Hook</span>
                        <ExpenseTracker />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                        <span className="badge badge-success">Custom Hook</span>
                        <CustomHookTest />
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                        <span className="badge badge-success">Custom Hook</span>
                        <DaysOfTheWeek />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageHooks;