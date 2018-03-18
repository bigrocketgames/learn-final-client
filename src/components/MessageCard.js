import React from 'react';

const MessageCard = ({message}) => {
  const messageTime = new Date(message.createdAt)

  return(
    <div className="message">
      <p className="messageContent">{message.content}</p>
      <div className="messageFooter">
        <span>&nbsp;&nbsp; - {message.user} - { messageTime.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default MessageCard