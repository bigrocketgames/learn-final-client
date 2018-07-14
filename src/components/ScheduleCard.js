import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleCard = ({game}) => {
  console.log(game.chatRoomId)
  const game_time = new Date(game.game_time);
  const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'}
  return (
    <tr>
      <td>{game_time.toLocaleDateString("lookup", options)}</td>
      <td>{game.away_team.fullname}</td>
      <td>@</td>
      <td>{game.home_team.fullname}</td>
      <td>{game.location}</td>
      <td><Link to={`/chat_rooms/${game.chatRoomId}`}>Chat It Up</Link></td>
    </tr>
  )
}

export default ScheduleCard