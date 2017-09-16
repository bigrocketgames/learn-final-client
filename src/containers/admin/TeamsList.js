import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import TeamsListCard from '../../components/admin/TeamsListCard';
import { getTeams } from '../../redux/modules/teams/actions';

class TeamsList extends Component {

  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    return (
      <div>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Team Name</th>
              <th>Home Stadium</th>
              <th>Sub Sport</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.teams.map(team => <TeamsListCard key={team.id} team={team} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    teams: state.teams
  })
}

export default connect(mapStateToProps, {getTeams})(TeamsList);