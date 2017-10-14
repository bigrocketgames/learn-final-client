import React from 'react';
import { Link } from 'react-router-dom';

const UserTeamsCard = ({userTeam}) => {
  return (
    <h3>
      <Link to={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</Link>
    </h3>
  )
}

export default UserTeamsCard;