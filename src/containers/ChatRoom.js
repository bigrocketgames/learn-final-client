import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';

import MessageCard from '../components/MessageCard';
import NewMessageForm from './forms/NewMessageForm';
import { GetChatRoom } from '../redux/modules/chatrooms/actions';

class ChatRoom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  handleReceivedMessage = response => {
    const { message } = response;
    this.setState = (state) => {
      return (
        [...this.state.messages],
        message
      )
    }
  }

  componentDidMount() {
    this.props.GetChatRoom(this.props.match_url)
      .then(data => this.setState({
        messages: data.chatRoom.messages
      }))
  }

  render() {
    const { chatRoom } = this.props.chatRoom
    const { user } = this.props
    const { messages } = this.state

    return(
      <div className="container">
        { chatRoom && <ActionCable 
        key={chatRoom.id}
        channel={{ channel: 'MessagesChannel', chatRoom_id: chatRoom.id }}
        onReceived={this.handleReceivedMessage}
        />
        }

        <p>{ chatRoom && chatRoom.roomName}</p>
        <div className="messagesContainer">
          {messages.length && messages.map(message => <MessageCard key={message.id} message={message} />)}
        </div>
        { (user && chatRoom) ? <NewMessageForm initialValues={{user_id: user.id, chatRoom_id: chatRoom.id}}/> : null}
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    chatRoom: state.chatRooms,
    user: state.auth.currentUser
  }
}

export default connect(MapStateToProps, {GetChatRoom})(ChatRoom)