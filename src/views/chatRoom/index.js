import React, { Component } from 'react';

import ChatRoom from '../../containers/ChatRoom';

class ChatRooms extends Component {
  render() {
    const {match} = this.props
    return(
      <ChatRoom match_url={`${match.url}`}/>
    )
  }
}

export default ChatRooms