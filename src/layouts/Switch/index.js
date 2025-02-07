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
        <button aria-label={`Change theme color to ${colorMode === 'light'? 'dark' : 'light'}`}>
        {colorMode === 'light' ?
            <FontAwesomeIcon icon={faSun} size='2x' />
            :
            <FontAwesomeIcon icon={faMoon} size='2x' />
          }
        </button> 
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
