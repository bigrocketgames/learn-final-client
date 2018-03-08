import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetChatRoom } from '../redux/modules/chatrooms/actions';

class ChatRoom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }


  componentDidMount() {
    this.props.GetChatRoom(this.props.match_url)
  }

  render() {
    return(
      <p>You are in a chatRoom</p>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    chatRoom: state.chatRoom
  }
}

export default connect(MapStateToProps, {GetChatRoom})(ChatRoom)