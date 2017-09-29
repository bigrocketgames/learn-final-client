import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import TeamsListCard from '../../components/admin/TeamsListCard';
import AddTeamForm from './forms/addTeamForm';
import { getTeams } from '../../redux/modules/teams/actions';
import { getSubSports } from '../../redux/modules/subsports/actions';

class TeamsList extends Component {

  componentDidMount() {
    this.props.getSubSports();
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

        <AddTeamForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    teams: state.teams
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTeams: getTeams,
    getSubSports: getSubSports
  }, dispatch);
}

export default connect((mapStateToProps), mapDispatchToProps)(TeamsList)