import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleCard = ({game}) => {
  const game_time = new Date(game.game_time);
  const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'}
  const startChatDate = new Date(game_time - (1000*60*60*24*6))
  const endChatDate = new Date(game_time - (-1000*60*60*24))
  const canChat = (Date.now()>= startChatDate && Date.now() < endChatDate)

  return (
    <tr>
      <td>{game_time.toLocaleDateString("lookup", options)}</td>
      <td>{game.away_team.fullname}</td>
      <td>@</td>
      <td>{game.home_team.fullname}</td>
      <td>{game.location}</td>
      <td>{ canChat ? <Link to={`/chat_rooms/${game.chatRoomId}`}>Chat It Up</Link> : <p>Chat Closer To Game Day</p> }</td>
    </tr>
  )
}

export default ScheduleCard