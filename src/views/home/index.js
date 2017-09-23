import React, { Component } from 'react';

import UserTeams from '../../containers/UserTeams';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Team Schedules</h1>
        <p className="text-center">Find out when your favorite team plays</p>
        <hr />
        <UserTeams />
      </div>
    )
  }
}

export default Home