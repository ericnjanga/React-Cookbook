import { useEffect, useState } from 'react'; 

/**
 * This custom hook helps track the online/offline status of the user's browser and 
 * returns a variable (isOnline), which can be used by a component to render UI 
 * based on the user's connectivity status.
 */
function useOnlineStatus () {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline); 
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline); 
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;