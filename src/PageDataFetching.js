import React from 'react';
import UserList from './UserList';


const PageDataFetching = () => {

    return (
        <>
            <div className="row">
                <h1>Data fetching from an external API</h1>
            </div>
      
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <span className="badge badge-success">Data Fetching</span>
                            <UserList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageDataFetching;