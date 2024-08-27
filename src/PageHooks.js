import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import CustomHookTest from './CustomHookTest';
import DaysOfTheWeek from './DaysOfTheWeek';

const PageHooks = () => {
    return ( 
        <>
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