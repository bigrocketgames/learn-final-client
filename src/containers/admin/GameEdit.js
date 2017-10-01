import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EditGameForm from './forms/editGameForm';
import { getTeams } from '../../redux/modules/teams/actions';
import { getGame } from '../../redux/modules/games/actions';

class GameEdit extends Component {

  componentDidMount(){
    this.props.getTeams();
    this.props.getGame(Number(this.props.match.params.id));
  }

  render() {
    // const { match } = this.props
    return(
      <div>
        <EditGameForm />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTeams: getTeams,
    getGame: getGame
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(GameEdit)