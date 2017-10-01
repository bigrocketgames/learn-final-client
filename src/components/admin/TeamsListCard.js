import React from 'react';

import RemoveTeamButton from '../../containers/admin/buttons/RemoveTeamButton';

const TeamsListCard = ({team}) => (
  <tr>
    <td>{team.fullname}</td>
    <td>{team.stadium_location}</td>
    <td>{team.sub_sport.name}</td>
    <td><RemoveTeamButton team={team} /></td>
  </tr>
)

export default TeamsListCard;