import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import {upgradeUser, downgradeUser} from '../../../redux/modules/users/actions';

class UpgradeUserButton extends Component {
  constructor(props) {
    super(props)

    this.upgradeUser = this.upgradeUser.bind(this);
    this.downgradeUser = this.downgradeUser.bind(this);
  }

  upgradeUser(e) {
    this.props.upgradeUser(this.props.user.id);
  }

  downgradeUser(e) {
    this.props.downgradeUser(this.props.user.id);
  }

  render() {
    let adminButton = null;
    if (this.props.user.admin) {
      adminButton = <Button bsStyle="warning" bsSize="small" id={this.props.id} onClick={this.downgradeUser}>Remove Admin</Button>
    } else {
      adminButton = <Button bsStyle="warning" bsSize="small" id={this.props.id} onClick={this.upgradeUser}>Make Admin</Button>
    }
    return (
      <div>
      {adminButton}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upgradeUser: upgradeUser,
    downgradeUser: downgradeUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(UpgradeUserButton)