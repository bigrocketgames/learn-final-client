import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditGameForm from './forms/editGameForm';
import { getTeams } from '../../redux/modules/teams/actions';

class GameEdit extends Component {

  componentDidMount(){
    this.props.getTeams();
  }

  render() {
    return(
      <div>
        <EditGameForm game={this.props.game} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    game: state.games.find(game => game.id === +ownProps.location.state.gameId)
  });
};

export default connect(mapStateToProps, {getTeams})(GameEdit)