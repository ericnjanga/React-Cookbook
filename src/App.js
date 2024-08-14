// import logo from './logo.svg';
import { useTheme } from './ThemeContext';
import Nav from './Nav';
import UserList from './UserList';
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
  return (
    <div className={`App theme-${theme}`}>
      <div class="container">
        <div className="row">
          <div className="col">
            <Nav />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <UserList />
          </div>
          <div className="col-md-4">
            <RegistrationForm />
          </div>
          <div className="col-md-4">
            <FeedbackForm />
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
