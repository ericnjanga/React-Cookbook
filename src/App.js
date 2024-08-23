// import logo from './logo.svg';
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import Nav from './Nav';
import UserList from './UserList';
import ExpenseTracker from './ExpenseTracker';
import CustomHookTest from './CustomHookTest';
import DaysOfTheWeek from './DaysOfTheWeek';
import { Button, DeleteButton, Alert } from './MixedComponents';
// import PageHome from './PageHome';
// import PageRegister from './PageRegister';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackForm from './FeedbackForm';
import RegistrationForm from './RegistrationForm';


import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  const { theme } = useTheme();
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div className={`App theme-${theme}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav />
          </div>
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
        
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <span className="badge badge-success">useReducer Hook</span>
                <ExpenseTracker />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
              <span className="badge badge-success">Custom Hook</span>
                <CustomHookTest />
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
              <span className="badge badge-success">Custom Hook</span>
                <DaysOfTheWeek />
                </div>
            </div>
          </div>
        </div>

        <div>
          <br />
          <hr />
          <br />
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
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <span className="badge badge-success">Controlled form</span>
                <RegistrationForm />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
              <span className="badge badge-success">Uncontrolled form</span>
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <Router>
        
        <Routes>
          <Route exact path="/" component={PageHome} />
          <Route path="/register" component={PageRegister} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Routes>

        
      </Router> */}
    </div>
  );
}

export default App;
