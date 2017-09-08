import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from '../../redux/modules/auth/actions';

class Signup extends Component {

  render() {
    return (
      <div className="signup">
        <h3>Create an Account</h3>
      </div>
    )
  }

}

export default Signup