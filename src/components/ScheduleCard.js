import React from 'react';

const ScheduleCard = (schedule) => {
  const game_time = new Date(schedule.game.game_time);
  const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'}
  return (
    <tr>
      <td>{game_time.toLocaleDateString('en-US', options)}</td>
      <td>{schedule.game.away_team.fullname}</td>
      <td>@</td>
      <td>{schedule.game.home_team.fullname}</td>
      <td>{schedule.game.location}</td>
    </tr>
  )
}

export default ScheduleCard