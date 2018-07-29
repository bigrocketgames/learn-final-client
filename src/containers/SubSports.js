import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getSubSport } from '../redux/modules/subsports/actions';
import SubSportsCard from '../components/SubSportsCard';
import { getUserTeams } from '../redux/modules/userteams/actions';

class SubSports extends Component {
  
  componentWillMount() {
    if (this.props.user.id) {
      this.props.getUserTeams();
    }
    this.props.getSubSport(this.props.match_url);
  }

  // making sure that every time a different subSport is clicked, the new subSport is attempted to be fetched.
  componentWillReceiveProps(nextProps) {
    if (nextProps.match_url !== this.props.match_url) {
      this.props.getSubSport(nextProps.match_url);
    }
  }

  render() {
    const {user, sub_sports} = this.props
    let userReminder = null;
    if (!user.id) {
      userReminder = <div><p className="text-center ERROR"><Link to={`/login`}>Login</Link> or <Link to={"/signup"}>Signup</Link> to save a team to your favorites!</p><hr /></div>
    }

    return(
      <div className="container">
        <h2 className="text-center">{sub_sports.name} TEAMS</h2>
        <hr />
        {userReminder}
        {sub_sports.conferences && sub_sports.conferences.map(conference => <SubSportsCard key={conference.id} conference={conference} />)}
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return{
    user: state.auth.currentUser,
    sub_sports: state.subSports
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubSport: getSubSport,
    getUserTeams: getUserTeams
  }, dispatch);
}

export default connect((MapStateToProps), mapDispatchToProps)(SubSports)