import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// const UserTeamsCard = ({userTeam}) => {
//   let likes = 0;

//   const addOne = () => {
//     console.log("clicked");
//     return likes++;
//   }

//   return (
//     <div>
//       <h3>
//         <Link to={`/teams/${userTeam.team.id}/schedule`}>{userTeam.team.fullname}</Link>
//       </h3>
//       <button onClick={addOne}>Like</button>
//       <span>{likes}</span>
//     </div>
//   )
// }

class UserTeamsCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      likes: 0,
    };
  }

  
  addOne = () => {
    this.setState({
      likes: ++this.state.likes,
    })
  }

  render(){
    return (
      <div>
      <h3>
        <Link to={`/teams/${this.props.userTeam.team.id}/schedule`}>{this.props.userTeam.team.fullname}</Link>
        </h3>
        <button id={this.props.userTeam.id} onClick={this.addOne}>Like</button>
        <span id={this.props.userTeam.id}>  {this.state.likes}</span>
      </div>
    )
  }
}



export default UserTeamsCard;