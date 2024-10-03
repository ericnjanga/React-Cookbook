
function createConnection({ serverUrl, roomId }) {

  // Throw an error if serverUrl or roomId have the wrong format
  if (typeof serverUrl !== 'string') {
    throw Error(`Expected serverUrl to be a string. Received: ${serverUrl}`);
  }
  if (typeof roomId !== 'string') {
    throw Error(`Expected roomId to be a string. Received: ${roomId}`);
  }

  let intervalId;
  let messageCallback;

  return {

    // Log a connection message, create a new cycle of notifications
    connect() {
      console.log(`✅ Connecting to "${roomId}" room at ${serverUrl}...`);
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback('Hey');
          } else {
            messageCallback('Lol');
          }
        }
      }, 3000);
    },

    // Stop the cycle of notifications, clear callback function, log a disconnection message
    disconnect() {
      clearInterval(intervalId);
      messageCallback = null;
      console.log(`❌ Disconnected from "${roomId}" room at ${serverUrl}...`);
    },

    // Handle errors and assign the callback function
    on(event, callback) {
      if (messageCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'message') {
        throw Error('Only "message" event is supported.');
      }
      messageCallback = callback;
    }
  };
}

export default createConnection;