import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
// import { useTheme } from './theme/ThemeContext';
import Switch from "./components/Switch";
import Nav from './Nav';
import './styles/App.css';
import theme from './theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';


function App() {
  // const { theme = 'light' } = useTheme();    className={`App theme-${theme}`}

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box> 
          <div className="container-fluid">
            <div className="row">
              <aside className="main-sidebar col-lg-3">
                <h1>React Patterns</h1>
                <Nav />
              </aside>

              <section className="main-content offset-lg-3 col-lg-9">
                <Switch></Switch>
                <AppRoutes />
              </section>
            </div>
          </div>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
