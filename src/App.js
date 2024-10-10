import { BrowserRouter as Router } from 'react-router-dom';
// import { useTheme } from './theme/ThemeContext';
import './styles/_App.scss';
import theme from './theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import AppRoutes from './AppRoutes';
import React from "react";

function App() {
  // const { theme = 'light' } = useTheme();    className={`App theme-${theme}`}



  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
