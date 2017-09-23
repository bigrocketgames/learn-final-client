import React, { Component } from 'react';

import LoginForm from './LoginForm';

class Login extends Component {

  render() {
    return (
      <div className="login container">
        <h2 className="text-center">Sign In</h2>
        <LoginForm/>
      </div>
    )
  }

}

export default Login