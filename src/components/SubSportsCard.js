import React from 'react';
import { Table } from 'react-bootstrap';

import SubSportTeamsList from '../containers/SubSportsTeamsList';

const SubSportsCard = ({conference}) => {
  if (conference.teams !== undefined) {
    if (conference.teams.length > 0) {
      
      const teams = conference.teams.sort(function(a, b) {
        if (a.fullname > b.fullname) {
          return 1;
        }else if (a.fullname < b.fullname) {
          return -1;
        }else {
          return 0;
        }
      });

      return (
        <div>
          <h2 className="text-center">{conference.name} TEAMS</h2>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Team Name:</th>
                <th>See Schedule:</th>
                <th>Add To Favorites:</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => <SubSportTeamsList key={team.id} team={team} />)}
            </tbody>
          </Table>
          <hr />
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="text-center">{conference.name} TEAMS</h2>
          <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
          <h5>We are working to update this as soon as possible.</h5>
          <hr />
        </div>
      )
    }
  } else {
    return (
      <div>
        <h2 className="text-center">{conference.name} TEAMS</h2>
        <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
      </div>
    )
  }
}

export default SubSportsCard