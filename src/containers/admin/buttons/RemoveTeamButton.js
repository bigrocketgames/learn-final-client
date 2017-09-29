import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { deleteTeam } from '../../../redux/modules/teams/actions';

class RemoveTeamButton extends Component {
  constructor(props){
    super(props)

    this.removeTeam = this.removeTeam.bind(this);
  }

  removeTeam(e) {
    this.props.deleteTeam(e.target.id);
  }

  render(){
    return (
      <Button bsStyle="danger" bsSize="small" id={this.props.team.id} onClick={this.removeTeam}>Delete {this.props.team.fullname}</Button>
    )
  }
}

export default connect(null, {deleteTeam})(RemoveTeamButton)