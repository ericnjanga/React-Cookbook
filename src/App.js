import { BrowserRouter as Router } from "react-router-dom";
// import { useTheme } from './theme/ThemeContext';
import "./styles/_App.scss";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import AppRoutes from "./AppRoutes";
import React from "react";
import Modal from "./components/Modal/Modal";
import { ModalProvider } from "./components/Modal/Modal";

function App() {
  // const { theme = 'light' } = useTheme();    className={`App theme-${theme}`}

  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <Modal />
          <AppRoutes />
        </Router>
      </ModalProvider>
    </ChakraProvider>
  );
}

export default App;
