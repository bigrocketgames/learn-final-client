import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { deleteSubSport } from '../../../redux/modules/subsports/actions';

class SubSportDeleteButton extends Component {
  constructor(props) {
    super(props)

    this.deleteSubSport = this.deleteSubSport.bind(this);
  }

  deleteSubSport(e) {
    const subSportId = Number(e.target.id)
    this.props.deleteSubSport(subSportId);
  }

  render(){
    return(
      <td><Button bsStyle="danger" bsSize="small" id={`${this.props.subSport.id}`} onClick={this.deleteSubSport}>Delete {this.props.subSport.name}</Button></td>
    )
  }
}

export default connect(null, {deleteSubSport})(SubSportDeleteButton)