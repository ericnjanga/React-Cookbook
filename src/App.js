import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import PageHooks from './PageHooks';
import PageForms from './PageForms';
import PageComponentComposition from './PageComponentComposition';

import { useTheme } from './ThemeContext';
// import Nav from './Nav';
// import UserList from './UserList';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`App theme-${theme}`}>
        <div className="container-fluid">
          <div className="row">
            <aside className="main-sidebar col-lg-3">
              <h1>React Patterns</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Hooks</Link>
                  </li>
                  <li>
                    <Link to="/forms">Forms</Link>
                  </li>
                  <li>
                    <Link to="/component-composition">Component Composition</Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <section className="main-content col-lg-9">

              <Routes>
                <Route path="/" element={<PageHooks />} />
                <Route path="/forms" element={<PageForms />} />
                <Route path="/component-composition" element={<PageComponentComposition />} />
              </Routes>
  
              {/* <div className="row">    
                <div className="col">
                  <Nav />
                </div>
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
                
              </div> */}
  
            </section>
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
    </Router>
  );
}

export default App;
