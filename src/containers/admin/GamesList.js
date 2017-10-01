import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { getGames } from '../../redux/modules/games/actions';
import GamesListCard from '../../components/admin/GamesListCard';

class GamesList extends Component {

  componentDidMount(){
    this.props.getGames();
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
              <th>Edit Game</th>
              <th>Delete Game</th>
            </tr>
          </thead>
          <tbody>
            {this.props.games.map(game => <GamesListCard key={game.id} game={game} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    games: state.games
  })
}

export default connect(mapStateToProps, {getGames})(GamesList)

