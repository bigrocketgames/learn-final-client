import React from 'react';
import { Table, Button, Glyphicon } from 'react-bootstrap';

export const SubSportTeamsList = (team) => {
  return (
    <tr>
      <td>{team.team.id}.</td>
      <td>{team.team.fullname}</td>
      <td><a href={`/teams/${team.team.id}/schedule`}>See {team.team.fullname} Schedule</a></td>
      <td><Button><Glyphicon glyph="plus" /></Button></td>
    </tr>
  )
}

const SubSportsCard = (subSport) => {
  if (subSport.subSport.teams !== undefined) {
    if (subSport.subSport.teams.length > 0) {
      return (
        <div className="container">
          <h2 className="text-center">{subSport.subSport.name} TEAMS</h2>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Team Name:</th>
                <th>See Schedule:</th>
                <th>Add To Favorites:</th>
              </tr>
            </thead>
            <tbody>
              {subSport.subSport.teams.map(team => <SubSportTeamsList key={team.id} team={team} />)}
            </tbody>
          </Table>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h2 className="text-center">{subSport.subSport.name} TEAMS</h2>
          <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
        </div>
      )
    }
  } else {
    return (
      <div className="container">
        <h2 className="text-center">{subSport.subSport.name} TEAMS</h2>
        <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
      </div>
    )
  }
}

export default SubSportsCard