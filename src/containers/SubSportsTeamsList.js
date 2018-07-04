import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUserTeam, removeUserTeam } from '../redux/modules/userteams/actions';

class SubSportTeamsList extends Component {

  addFavorite = (e) => {
    if (e.target.localName === "span") {
      const userTeamDetails = { 
        user_id: this.props.user.id,
        team_id: Number(e.target.parentElement.id)
      }
      this.props.addUserTeam(userTeamDetails);    
    } else {
      const userTeamDetails = { 
        user_id: this.props.user.id,
        team_id: Number(e.target.id)
      }
      this.props.addUserTeam(userTeamDetails);
    }
  }

  removeFavorite = (e) => {
    if (e.target.localName === "span") {
      const userTeamID = Number(e.target.parentElement.id)
      this.props.removeUserTeam(userTeamID);
    } else {
      const userTeamID = Number(e.target.id)
      this.props.removeUserTeam(userTeamID);
    }


  }

  render() {
    const {team, userTeams} = this.props
    let favoriteButton = null;

    if (team && this.props.user.id) {
      const userTeam = userTeams.find(userTeam => userTeam.team.id === team.id)
      if (userTeam){
        favoriteButton = <Button bsSize="small" onClick={this.removeFavorite} id={userTeam.id} ><Glyphicon glyph="minus" /></Button>
      } else {
        favoriteButton = <Button bsSize="small" onClick={this.addFavorite} id={team.id}><Glyphicon glyph="plus" /></Button>
      }
    }

    return (
      <tr>
        <td>{team.fullname}</td>
        <td><Link to={`/teams/${team.id}/schedule`}>See {team.fullname} Schedule</Link></td>
        <td>{favoriteButton} <span>{team.fans === 1 ? `${team.fans} fan` : `${team.fans} fans`}</span></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
    userTeams: state.userTeams
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addUserTeam: addUserTeam,
    removeUserTeam: removeUserTeam
  }, dispatch);
}

export default connect((mapStateToProps), mapDispatchToProps)(SubSportTeamsList)