import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { deleteGame } from '../../../redux/modules/games/actions';

class RemoveGameButton extends Component {
  constructor(props) {
    super(props)

    this.deleteGame = this.deleteGame.bind(this);
  }

  deleteGame(e) {
    this.props.deleteGame(e.target.id);
  }

  render() {
    return(
      <Button bsSize="small" bsStyle="danger" id={this.props.game.id} onClick={this.deleteGame}>Delete Game</Button>
    )
  }
}

export default connect(null, {deleteGame})(RemoveGameButton)