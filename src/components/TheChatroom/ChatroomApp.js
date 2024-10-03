import React, { useState } from 'react'; 
import Chatroom from './Chatroom';

const ChatroomApp = () => {
  const [roomId, setRoomId] = useState('liberals');

  return (
    <>
      <label className="form-label">
        Choose the chat room: {' '}
        <select 
          className="form-select" 
          aria-label="Default select chat rooms"
          onChange={e => setRoomId(e.target.value)}
        >
          <option value='liberals'>Liberals Party of Canada </option>
          <option value='conservatives'>Conservatives Party of Canada </option>
          <option value='new-democratic'>New Democratic Party</option>
          <option value='block-quebecois'>Bloc Québécois</option>
          <option value='green-party'>Green Party of Canada </option>
          <option value='peoples-party'>People’s Party of Canada</option>
          <option value='christian-party'>Christian Heritage Party of Canada</option>
        </select>
      </label>

      <hr />

      <Chatroom roomId={roomId} />
    </>
  );

};

export default ChatroomApp;