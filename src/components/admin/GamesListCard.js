import React from 'react';
import { Link } from 'react-router-dom';

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
      <td><Link to={{ pathname: `/admin/games/${game.id}/edit`, state: { gameId: game.id }}}>Edit Game</Link></td>
      <td><RemoveGameButton game={game}/></td>
    </tr>
  )
}

export default GamesListCard