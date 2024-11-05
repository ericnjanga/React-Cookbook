import { BrowserRouter as Router } from "react-router-dom";
// import { useTheme } from './theme/ThemeContext';
import "./styles/_App.scss";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import AppRoutes from "./AppRoutes";
import React from "react";
import Modal from "./components/ModalModule";
import { ModalProvider, ContentCacheProvider } from "./components/ModalModule";

import "react-accessible-accordion/dist/fancy-example.css";

function App() {
  // const { theme = 'light' } = useTheme();    className={`App theme-${theme}`}

  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <ContentCacheProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Router>
            <Modal />
            <AppRoutes />
          </Router>
        </ContentCacheProvider>
      </ModalProvider>
    </ChakraProvider>
  );
}

export default App;
