import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserTeams from '../../containers/UserTeams';

class Home extends Component {

  render() {
    let pageHeader = null;
    if (this.props.user.id) {
      pageHeader = <div>
          <h3 className="text-center">Your Favorite Teams</h3>
          <p className="text-center">Click them to see their schedule</p><hr/>
          <UserTeams />
          </div>
    } else {
      pageHeader = <div><h1 className="text-center">Team Schedules</h1><p className="text-center">Find out when your favorite team plays</p><hr /></div>
    }

    return (
      <div className="container">
        {pageHeader}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Home);