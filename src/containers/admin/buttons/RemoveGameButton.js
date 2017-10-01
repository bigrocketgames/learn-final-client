import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class RemoveGameButton extends Component {
  constructor(props) {
    super(props)

    this.deleteGame = this.deleteGame.bind(this);
  }

  deleteGame(e) {

  }

  render() {
    return(
      <Button bsSize="small" bsStyle="danger" id={this.props.game.id}>Delete Game</Button>
    )
  }
}

export default RemoveGameButton