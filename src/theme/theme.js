// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config and extend the theme
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    gray: {
      100: '#fafafa',
      200: '#68b317',
    },
    body: {
      bg: 'red',
    }
  }
  
});

export default theme;