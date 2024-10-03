import { useEffect } from 'react'; 
import createConnection from './../components/TheChatroom/Chat';

/**
 *   Hooks that creates a new connection (using params), set message callback,
 *   disconnect when component unmounts, and only recreate a connection
 *   if parameters chamge
 */
const useChatroom = ({ serverUrl, roomId, onReceiveMessage }) => {
  /**
   * FUTURE API: 
   * import { experimental_useEffectEvent as useEffectEvent } from 'react';
   * "useEffectEvent" (Not yet released to a stable React version)
   * If we don't want the chat to reconnect everytime the event handler (onReceiveMessage)
   * changes, we would wrap it with useEffectEvent hook and remove it
   * from useEffect dependency array
   * const onMessage = useEffectEvent(onReceiveMessage);
   */

  useEffect(() => {
    // Create a new connection
    const connection = createConnection({
      // options ...
      serverUrl: serverUrl,
      roomId: roomId
    });
    // The logic for what happens when a message is received 
    // is handled somewhere else
    connection.on('message', (msg) => {
      onReceiveMessage(msg);
    });
    connection.connect();

    // Disconnection when the component unmounts
    return () => connection.disconnect();

    // Recreate a new connection only if roomId or serverUrl params change
  }, [roomId, serverUrl, onReceiveMessage]);
};

export default useChatroom;