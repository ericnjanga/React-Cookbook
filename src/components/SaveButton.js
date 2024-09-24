import React from 'react'; 
import useOnlineStatus from './../hooks/useOnlineStatus';

const SaveButton = () => {
  const isOnline = useOnlineStatus();

  function handleSaveClick() { 
    console.log('✅ Progress saved');
  }

  return (
    <button className='btn btn-primary' disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting ...'}
    </button>
  );
};

export default SaveButton;