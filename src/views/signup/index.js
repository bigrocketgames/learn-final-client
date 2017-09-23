import React, { Component } from 'react';

import SignupForm from './SignupForm';

class Signup extends Component {

  render() {
    return (
      <div className="signup container">
        <h2 className="text-center">Signup Form</h2>
        <SignupForm/>
      </div>
    )
  }

}

export default Signup