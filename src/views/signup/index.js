import React, { Component } from 'react';

import SignupForm from './SignupForm';

class Signup extends Component {

  render() {
    return (
      <div className="signup">
        <h2>Signup Form</h2>
        <SignupForm/>
      </div>
    )
  }

}

export default Signup