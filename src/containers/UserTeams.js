import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserTeams } from '../redux/modules/userteams/actions';
import { UserTeamsCard } from '../components/UserTeamsCard';

class UserTeams extends Component {

  componentDidMount() {
    if (this.props.user.id) {
      this.props.getUserTeams();
    }
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Your Favorite Teams</h3>
        <p className="text-center">Click them to see their schedule</p>
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { getUserTeams })(UserTeams)