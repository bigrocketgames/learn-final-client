import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ScheduleCard = (schedule) => {
  const game_time = new Date(schedule.game.game_time);
  const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'}
  return (
    <tr>
      <td>{game_time.toLocaleDateString("lookup", options)}</td>
      <td>{schedule.game.away_team.fullname}</td>
      <td>@</td>
      <td>{schedule.game.home_team.fullname}</td>
      <td>{schedule.game.location}</td>
      <td>Link to Chat room</td>
    </tr>
  )
}

export default ScheduleCard