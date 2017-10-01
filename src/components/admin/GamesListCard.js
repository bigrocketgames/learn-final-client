import React from 'react';

import RemoveGameButton from '../../containers/admin/buttons/RemoveGameButton';

const GamesListCard = ({game}) => {
  const game_time = new Date(game.game_time);
  const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'}
  return(
    <tr>
      <td>{game_time.toLocaleDateString("lookup", options)}</td>
      <td>{game.away_team.fullname}</td>
      <td>@</td>
      <td>{game.home_team.fullname}</td>
      <td>{game.location}</td>
      <td><a href={`/admin/games/${game.id}/edit`}>Edit Game</a></td>
      <td><RemoveGameButton game={game}/></td>
    </tr>
  )
}

export default GamesListCard