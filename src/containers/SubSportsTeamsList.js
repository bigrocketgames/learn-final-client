import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addUserTeam, removeUserTeam } from '../redux/modules/userteams/actions';

class SubSportTeamsList extends Component {
  constructor(props) {
    super(props)

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this)
  }

  addFavorite(e) {
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

  removeFavorite(e) {
    if (e.target.localName === "span") {
      const userTeamID = Number(e.target.parentElement.id)
      this.props.removeUserTeam(userTeamID);
    } else {
      const userTeamID = Number(e.target.id)
      this.props.removeUserTeam(userTeamID);
    }


  }

  render() {
    const team = this.props.team
    let favoriteButton = null;

    if (team) {
      let arraylength = this.props.userTeams.length
      for (var i=0; i<arraylength; i++) {
        if (this.props.userTeams[i].team.id === team.id){
          favoriteButton = <Button bsSize="small" onClick={this.removeFavorite} id={this.props.userTeams[i].id} ><Glyphicon glyph="minus" /></Button>
        }
      }
      if (favoriteButton === null) {
        favoriteButton = <Button bsSize="small" onClick={this.addFavorite} id={team.id}><Glyphicon glyph="plus" /></Button>
      }
    }

    return (
      <tr>
        <td>{team.fullname}</td>
        <td><Link to={`/teams/${team.id}/schedule`}>See {team.fullname} Schedule</Link></td>
        <td>{favoriteButton}</td>
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