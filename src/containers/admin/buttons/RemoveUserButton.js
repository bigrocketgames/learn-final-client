import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class RemoveUser extends Component {
  constructor(props) {
    super(props)

    this.deleteUser = this.deleteUser.bind(this);
  }

  render(){
    return(
      "hello"
    )
  }
}

export default RemoveUser