import React from 'react';

const UserTeamsCard = ({userTeam}) => {
  return (
    <h3>
      <a href={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</a>
    </h3>
  )
}

export default UserTeamsCard;