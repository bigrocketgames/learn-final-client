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
    const { teams } = this.props
    return (
      <div>
        <h2 className="text-center">Teams List</h2>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Home Stadium</th>
              <th>Sub Sport</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teams.length > 0 && teams.map(team => <TeamsListCard key={team.id} team={team} />)}
          </tbody>
        </Table>

        {this.props.subSports.length > 0 && <AddTeamForm />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    teams: state.teams,
    subSports: state.subSports
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTeams: getTeams,
    getSubSports: getSubSports
  }, dispatch);
}

export default connect((mapStateToProps), mapDispatchToProps)(TeamsList)