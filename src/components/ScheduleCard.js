import React from 'react';

const ScheduleCard = (schedule) => {
  return (
    <tr>
      <td>{new Date(schedule.game.game_time).toString()}</td>
      <td>{schedule.game.away_team.fullname}</td>
      <td>{schedule.game.home_team.fullname}</td>
      <td>{schedule.game.location}</td>
    </tr>
  )
}

export default ScheduleCard