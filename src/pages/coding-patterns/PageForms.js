import React from 'react';

import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import RegistrationForm from '../../RegistrationForm';


const PageForms = () => {
    return (
        <>
          <div className="row">
            <h1>Forms (Controlled and Uncontrolled)</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                  <div className="card-body">
                    <span className="badge badge-success">Controlled form</span>
                    <RegistrationForm />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                  <span className="badge badge-success">Uncontrolled form</span>
                    <FeedbackForm />
                  </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default PageForms;