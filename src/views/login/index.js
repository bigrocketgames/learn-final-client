import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

class Login extends Component {

  render() {
    let errorBanner = null;
    if (this.props.error) {
      errorBanner = <div className="container ERROR">{this.props.error}</div>
    }
    return (
      <div className="login container">
        <h2 className="text-center">Sign In</h2>
        {errorBanner}
        <LoginForm/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { error: state.auth.error };
};

export default connect(mapStateToProps)(Login)