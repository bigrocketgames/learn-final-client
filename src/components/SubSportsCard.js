import React from 'react';

export const SubSportTeamsCard = (team) => {
  return (
    <h4>{team.team.id}.  <a href="/">{team.team.fullname}</a></h4>
  )
}

const SubSportsCard = (subSport) => {
  if (subSport.subSport.teams !== undefined) {
    if (subSport.subSport.teams.length > 0) {
      return (
        <div className="container">
          <h2 className="text-center">{subSport.subSport.name} TEAMS</h2>
          {subSport.subSport.teams.map(team => <SubSportTeamsCard key={team.id} team={team} />)}
        </div>
      )
    } else {
      return (
        <div className="container">
          <h4 className="text-center">{subSport.subSport.name} TEAMS</h4>
        </div>
      )
    }
  } else {
    return (
      <div className="container">
        <h4 className="text-center">{subSport.subSport.name} TEAMS</h4>
      </div>
    )
  }
}

export default SubSportsCard