import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import { getGames, deleteGame } from '../../redux/modules/games/actions';
import { getTeams } from 
'../../redux/modules/teams/actions';
import GamesListCard from '../../components/admin/GamesListCard';
import AddGameForm from './forms/addGameForm';

class GamesList extends Component {

  componentDidMount(){
    this.props.getGames();
    this.props.getTeams();
  }

  deleteGame = (e) => {
    this.props.deleteGame(e.target.id);
  }

  render(){
    return(
      <div className="container">
        <h2 className="text-center">Games List</h2>
        <Table striped responsive hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Away Team</th>
              <th></th>
              <th>Home Team</th>
              <th>Game Location</th>
              <th>Edit Game</th>
              <th>Delete Game</th>
            </tr>
          </thead>
          <tbody>
            {this.props.games.length > 0 && this.props.games.map(game => <GamesListCard key={game.id} game={game} handleClick={this.deleteGame} />)}
          </tbody>
        </Table>
        <AddGameForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    games: state.games
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getGames: getGames,
    getTeams: getTeams,
    deleteGame: deleteGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList)

