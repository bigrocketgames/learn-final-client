import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { RemoveUser } from '../../../redux/modules/users/actions';

class RemoveUserButton extends Component {
  constructor(props) {
    super(props)

    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(e) {
    this.props.RemoveUser(e.target.id);
  }

  render(){
    return(
      <Button bsStyle="danger" bsSize="small" onClick={this.deleteUser} id={this.props.user.id}>Delete User</Button>
    )
  }
}

export default connect(null, {RemoveUser})(RemoveUserButton)