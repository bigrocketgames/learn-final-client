import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSchedule } from '../redux/modules/schedule/actions';
import { getTeam } from '../redux/modules/teams/actions';

class Schedules extends Component {

  componentDidMount(){
    this.props.getTeam("/teams/" + this.props.match_params_id);
    this.props.getSchedule(this.props.match_url);
  }
  
  render() {
    return (
      <div>
        <h3 className="text-center">{this.props.team.fullname} Schedule</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    schedule: state.schedule,
    team: state.teams
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSchedule: getSchedule,
    getTeam: getTeam
  }, dispatch);
}

export default connect((mapStateToProps), mapDispatchToProps)(Schedules)