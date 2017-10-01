import React from 'react';
import { Table } from 'react-bootstrap';

import SubSportTeamsList from '../containers/SubSportsTeamsList';

const SubSportsCard = ({subSport}) => {
  if (subSport.teams !== undefined) {
    if (subSport.teams.length > 0) {
      return (
        <div className="container">
          <h2 className="text-center">{subSport.name} TEAMS</h2>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Team Name:</th>
                <th>See Schedule:</th>
                <th>Add To Favorites:</th>
              </tr>
            </thead>
            <tbody>
              {subSport.teams.map(team => <SubSportTeamsList key={team.id} team={team} />)}
            </tbody>
          </Table>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h2 className="text-center">{subSport.name} TEAMS</h2>
          <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
          <h5>We are working to update this as soon as possible.</h5>
        </div>
      )
    }
  } else {
    return (
      <div className="container">
        <h2 className="text-center">{subSport.name} TEAMS</h2>
        <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
      </div>
    )
  }
}

export default SubSportsCard