import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageHooks from './PageHooks';
import PageForms from './PageForms';
import PageComponentComposition from './PageComponentComposition';
import PageDataFetching from './PageDataFetching';
import PageDynamicJsx from './PageDynamicJsx';

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

              <Routes>
                <Route path="/" element={<PageDynamicJsx />} />
                <Route path="/hooks" element={<PageHooks />} />
                <Route path="/forms" element={<PageForms />} />
                <Route path="/component-composition" element={<PageComponentComposition />} />
                <Route path="/data-fetching" element={<PageDataFetching />} />
              </Routes>
            </section>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
