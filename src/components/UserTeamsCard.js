import React from 'react';
import { Link } from 'react-router-dom';

const UserTeamsCard = ({userTeam}) => {
  // constructor(props){
  //   super(props)

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick = (e) => {
  //   e.preventDefault();
  //   const userTeamID = Number(e.target.id);
  //   this.props.addLike(userTeamID);
    
  // }

  return (
    <div>
      <h3 className="userTeamLink">
        <Link to={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</Link>
      </h3>
    </div>
  )
}

export default UserTeamsCard