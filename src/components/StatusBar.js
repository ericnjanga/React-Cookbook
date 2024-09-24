import React from 'react'; 
import useOnlineStatus from '../hooks/useOnlineStatus';

const StatusBar = () => {
  const isOnline = useOnlineStatus();

  return <h4>{isOnline ? '✅ Online' : '❌ Disconnected'}</h4>
};

export default StatusBar;