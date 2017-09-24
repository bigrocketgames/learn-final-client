import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserTeams } from '../redux/modules/userteams/actions';
import UserTeamsCard from '../components/UserTeamsCard';

class UserTeams extends Component {

  componentDidMount() {
    if (this.props.user.id) {
      this.props.getUserTeams();
    }
  }

  render() {
    return (
      <div>
        {this.props.userTeams.map(userTeam => <UserTeamsCard key={userTeam.id} userTeam={userTeam} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
    userTeams: state.userTeams
  }
}

export default connect(mapStateToProps, { getUserTeams })(UserTeams)