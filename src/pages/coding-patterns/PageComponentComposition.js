import React from 'react';
import { useState } from 'react';
import { Button, DeleteButton, Alert } from '../../MixedComponents'; 

const PageComponentComposition = () => {
    const [alertVisibility, setAlertVisibility] = useState(false);

    return (
        <>
            <div className="row">
                <h1>Component Composition</h1>
            </div>
        
            <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div style={{ display:'flex', gap:'6px', marginBottom: '15px' }}>
                        <span className="badge badge-success">Component Composition with Children</span>
                        <span className="badge badge-secondary">Containment</span>
                        <span className="badge badge-secondary">Specialization</span>
                      </div>
                      <div>
                        <header>Little Lemon Restaurant</header>
                        <Button onClickHandler={() => setAlertVisibility(true)}>Delete account</Button>
                        <Alert isVisible={alertVisibility}>
                          <h1>Delete Account</h1>
                          <p>Are you sure you want to proceed? You'll miss out on all the delicious receipes.</p>
                          <DeleteButton clickHandler={() => setAlertVisibility(false)} />
                        </Alert>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    );
};

export default PageComponentComposition;