import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { useTheme } from './ThemeContext';
import Switch from "./Switch";
import Nav from './Nav';
import './styles/App.css';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`App theme-${theme}`}>
        <div className="container-fluid">
          <div className="row">
            <aside className="main-sidebar col-lg-3">
              <h1>React Patterns</h1>
              <Nav />
            </aside>

            <section className="main-content col-lg-9">
              <Switch></Switch>
              <AppRoutes />
            </section>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
