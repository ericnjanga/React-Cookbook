import React, { useState } from 'react';  
import useChatroom from '../../hooks/useChatroom';
import showNotification from './notifications';

const Chatroom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  // Calls the custom Hook without worrying about how it works inside:
  useChatroom({
    serverUrl,
    roomId,
    onReceiveMessage(msg) {
      // This is what is done when a message arrives: Displaying a notification with that message
      showNotification(`New message: ${msg}`);
    }
  });

  return (
    <>
      <label className="form-label">
        Server URL:
        <input className="form-control" value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h3>Welcome to {roomId} chat room :)</h3>
    </>
  );

};

export default Chatroom;