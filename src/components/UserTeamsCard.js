import React from 'react';
import { Link } from 'react-router-dom';

const UserTeamsCard = ({userTeam}) => {

  return (
    <div>
      <h3 className="userTeamLink">
        <Link to={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</Link>
      </h3>
    </div>
  )
}

export default UserTeamsCard