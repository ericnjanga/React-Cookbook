import React from "react";
import FeedbackForm from './FeedbackForm';
import RegistrationForm from './RegistrationForm';


const PageHome = () => {
    return (
        <div className="row">
          <div className="col-md-7">
            <RegistrationForm />
          </div>
          <div className="col-md-5">
            <FeedbackForm />
          </div>
        </div>
    );
};

export default PageHome;