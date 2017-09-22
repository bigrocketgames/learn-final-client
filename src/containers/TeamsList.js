import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class SubSportTeamsList extends Component {
  constructor(props) {
    super(props)

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this)
  }

  addFavorite() {
    debugger
    console.log("add to favorites");
  }

  removeFavorite() {
    console.log("remove favorite");
  }

  render() {
    const team = this.props.team



    return (
      <tr>
        <td>{team.id}.</td>
        <td>{team.fullname}</td>
        <td><a href={`/teams/${team.id}/schedule`}>See {team.fullname} Schedule</a></td>
        <td><Button bsSize="small" onClick={this.addFavorite} ><Glyphicon glyph="plus" /></Button></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser
  }
}

export default connect((mapStateToProps), { })(SubSportTeamsList)