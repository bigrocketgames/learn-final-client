import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { addLike } from '../redux/modules/userteams/actions';

class UserTeamsCard extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    const userTeamID = Number(e.target.id);
    this.props.addLike(userTeamID);
    
  }

  render() {
    const userTeam = this.props.userTeam;
    return (
      <div>
        <h3 className="userTeamLink">
          <Link to={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</Link>
        </h3>
        <Button id={userTeam.id} className="likeButton" bsSize="xsmall" bsStyle="primary" onClick={this.handleClick}>Like</Button>
        <span>{userTeam.team.likes}</span>
      </div>
    )
  }
}

export default connect(null, { addLike })(UserTeamsCard)