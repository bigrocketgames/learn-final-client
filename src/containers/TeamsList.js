import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class SubSportTeamsList extends Component {
  constructor(props) {
    super(props)

    this.handleFavorite = this.handleFavorite.bind(this)
  }

  handleFavorite() {
    debugger
    console.log("this is a start");
  }

  render() {
    const team = this.props.team
    return (
      <tr>
        <td>{team.id}.</td>
        <td>{team.fullname}</td>
        <td><a href={`/teams/${team.id}/schedule`}>See {team.fullname} Schedule</a></td>
        <td><Button bsSize="small" onClick={this.handleFavorite} ><Glyphicon glyph="plus" /></Button></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser
  }
}

// const SubSportTeamsList = (team) => {
//   return (
    // <tr>
    //   <td>{team.team.id}.</td>
    //   <td>{team.team.fullname}</td>
    //   <td><a href={`/teams/${team.team.id}/schedule`}>See {team.team.fullname} Schedule</a></td>
    //   <td><Button bsSize="small"><Glyphicon glyph="plus" /></Button></td>
    // </tr>
//   )
// }

export default connect((mapStateToProps), { })(SubSportTeamsList)