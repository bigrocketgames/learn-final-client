import React from 'react';
import { Link } from 'react-router-dom';

import ButtonComp from '../../containers/ButtonComp';

const GamesListCard = (props) => {
  const {game} = props
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
      <td><ButtonComp btnSize={"small"} btnStyle={"danger"} id={game.id} label={"Delete Game"} handleClick={props.handleClick} /></td>
    </tr>
  )
}

export default GamesListCard