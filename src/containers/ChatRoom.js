import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';
import { Link } from 'react-router-dom';

import MessageCard from '../components/MessageCard';
import NewMessageForm from './forms/NewMessageForm';
import { GetChatRoom } from '../redux/modules/chatrooms/actions';

class ChatRoom extends Component {
  state = {
    messages: []
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({behavior: "smooth"});
  }

  handleReceivedMessage = response => {
    const { message } = response;
    this.setState ({
      messages: [...this.state.messages, message]
    })
  }

  componentDidMount() {
    this.props.GetChatRoom(this.props.match_url)
      .then(data => this.setState({
        messages: data.chatRoom.messages
      }))
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  render() {
    const { chatRoom } = this.props.chatRoom
    const { user } = this.props
    const { messages } = this.state
    let userReminder = null
    if (!user.id) {
      userReminder = <div><p className="text-center ERROR"><Link to={`/login`}>Login</Link> or <Link to={"/signup"}>Signup</Link> to chat during your favorite team's game!</p></div>
    }

    return(
      <div className="container">
        { chatRoom && <ActionCable 
        key={chatRoom.id}
        channel={{ channel: 'MessagesChannel', chatRoom_id: chatRoom.id }}
        onReceived={this.handleReceivedMessage}
        />
        }

        <h2 className="text-center">{ chatRoom && chatRoom.roomName}</h2>
        <div className="messagesContainer">
          {messages.length > 0 ? messages.map(message => <MessageCard key={message.id} message={message} />) : null}
          <div ref={(el) => { this.messagesEnd = el; }}></div>
        </div>
        { (user.id && chatRoom) ? <NewMessageForm initialValues={{user_id: user.id, chat_room_id: chatRoom.id}}/> : userReminder}
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