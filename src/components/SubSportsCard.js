import React from 'react';
import { Table } from 'react-bootstrap';

import SubSportTeamsList from '../containers/SubSportsTeamsList';

const SubSportsCard = ({conference, alt_season_display}) => {
  const conferenceHeadline = alt_season_display ? <h2 className="text-center">{`${conference.name}`} TEAMS</h2> : null
  
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
          {conferenceHeadline}
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
        </div>
      )
    } else {
      return (
        <div>
          {conferenceHeadline}
          <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
          <h5>We are working to update this as soon as possible.</h5>
        </div>
      )
    }
  } else {
    return (
      <div>
        {conferenceHeadline}
        <h5>Unfortunately, there are no teams to show for this league at this time.</h5>
      </div>
    )
  }
}

export default SubSportsCard