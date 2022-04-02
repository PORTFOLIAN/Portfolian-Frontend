import React, { useEffect, useState } from 'react';

function ChatTest({ leaderId, projectId }) {
  // note: navbar -> chatContainer -> chatTest | project -> chatContainer -> chatTest

  return (
    <>
      <button onClick={(e) => {}}>채팅방 입장하기</button>
      <div>
        {leaderId}
        <br></br>
        {projectId}
      </div>
    </>
  );
}

export default ChatTest;
