import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { deleteSport } from '../../../redux/modules/sports/actions';

class SportDeleteButton extends Component {
  constructor(props) {
    super(props)

    this.deleteSport = this.deleteSport.bind(this);
  }

  deleteSport(e) {
    const sportId = Number(e.target.id)
    this.props.deleteSport(sportId);
  }

  render(){
    return(
      <td><Button bsStyle="danger" bsSize="small" id={`${this.props.sport.id}`} onClick={this.deleteSport}>Delete {this.props.sport.name}</Button></td>
    )
  }
}

export default connect(null, {deleteSport})(SportDeleteButton)