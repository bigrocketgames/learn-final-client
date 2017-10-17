import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { addLike } from '../redux/modules/userteams/actions';

class UserTeamsCard extends Component {

  // constructor(props){
  //   super(props)

  //   this.clickLike = this.clickLike.bind(this);
  // }

  clickLike = (e) => {
    e.preventDefault();
    // console.log(this.props);
    this.props.addLike(this.props.userTeam.id);
  }

  render() {
    const userTeam = this.props.userTeam;
    return (
      <div>
        <h3 className="userTeamLink">
          <Link to={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</Link>
        </h3>
        <Button id={userTeam.id} className="likeButton" bsSize="xsmall" bsStyle="primary" onClick={this.clickLike}>Like</Button>
        <span>{userTeam.team.likes}</span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addLike: addLike
  })
}

export default connect(null, mapDispatchToProps)(UserTeamsCard)