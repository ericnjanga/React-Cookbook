import './_switch.scss';
import { useColorMode, Button, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun, 
  faMoon, 
} from "@fortawesome/free-regular-svg-icons";

const Switch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <Box className='theme-switch'>
        <Button onClick={toggleColorMode} variant='ghost'>
          {colorMode === 'light' ?
            <FontAwesomeIcon icon={faSun} size='2x' />
            :
            <FontAwesomeIcon icon={faMoon} size='2x' />
          }
          
        </Button>
      </Box>
//         <label className="switch">

// colorScheme='teal' variant='solid'
//           <FontAwesomeIcon icon={faSun} size='2x' />


//           {/* <input
//             type="checkbox"
//             checked={colorMode === 'dark'}
//             onChange={toggleColorMode}
//           />
//           <span className="slider round" /> */}
//         </label>
    );
};

export default Switch;
