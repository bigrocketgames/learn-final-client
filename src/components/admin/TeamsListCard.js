import React from 'react';

import ButtonComp from '../../containers/ButtonComp';

const TeamsListCard = (props) => {
  const {team} = props
  return (
    <tr>
      <td>{team.fullname}</td>
      <td>{team.stadium_location}</td>
      <td>{team.conference.sub_sport.name}</td>
      <td><ButtonComp btnSize="small" btnStyle="danger" id={team.id} handleClick={props.handleClick} label={`Delete ${team.fullname}`} /></td>
    </tr>
  )
}

export default TeamsListCard;