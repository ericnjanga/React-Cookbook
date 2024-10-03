import { useSyncExternalStore } from 'react';

// Listens to the navigator online/offline status
function subscribe (callback) {

  window.addEventListener('online', callback); 
  window.addEventListener('offline', callback);

  return () => { // Unsubscribes when it's all over
    window.removeEventListener('online', callback); 
    window.removeEventListener('offline', callback);
  };
}

/**
 * This custom hook helps track the online/offline status of the user's browser and 
 * returns a variable (isOnline), which can be used by a component to render UI 
 * based on the user's connectivity status.
 */
function useOnlineStatus () {
  return useSyncExternalStore(
    subscribe, // Subscribes to the navigator online/offline status
    () => navigator.onLine, // Retrives the current value of the navigator's online status
    () => true // (optional): Gets the snapshot when the code runs on the server (e.g., for server-side rendering).
  );
}

export default useOnlineStatus;