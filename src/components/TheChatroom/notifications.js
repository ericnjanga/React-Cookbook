import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

/**
 * Display a message through Toastify toast UI
 * @param {*} message 
 * @param {*} theme 
 */
function showNotification(message, theme = 'dark') {
  Toastify ({
    text: message,
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: theme === 'dark' ? 'black' : 'white',
      color: theme === 'dark' ? 'white' : 'black',
    },
  }).showToast();
}

export default showNotification;