import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSubSport } from '../redux/modules/subsports/actions';
import SubSportsCard from '../components/SubSportsCard';
import { getUserTeams } from '../redux/modules/userteams/actions';

class SubSports extends Component {
  
  componentDidMount() {
    this.props.getUserTeams();
    this.props.getSubSport(this.props.match_url);
  }

  render() {
    return(
        <SubSportsCard subSport={this.props.sub_sports} />
    )
  }


}

const MapStateToProps = (state) => {
  return({
    sub_sports: state.subSports
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubSport: getSubSport,
    getUserTeams: getUserTeams
  }, dispatch);
}

export default connect((MapStateToProps), mapDispatchToProps)(SubSports)