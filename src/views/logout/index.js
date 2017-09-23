import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/modules/auth/actions';

class Logout extends Component {


  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <div className="container text-center">
        You are signing out.
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)