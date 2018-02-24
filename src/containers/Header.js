import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import SubSportCardNav from '../components/SubSportCardNav';
import { getSports } from '../redux/modules/sports/actions';

class Header extends Component {

  componentDidMount() {
    this.props.getSports()
  }

  render() {
    let rightSideLinks = null;
    const { auth, sports } = this.props;
  
    if (!auth.isAuthenticated) {
      rightSideLinks = <ul className="nav navbar-nav navbar-right"><li><NavLink to="/signup">Signup</NavLink></li><li><NavLink to="/login">Login</NavLink></li></ul>
    } else if (auth.currentUser.admin) {
      rightSideLinks = <ul className="nav navbar-nav navbar-right"><li><NavLink to="/logout">Logout</NavLink></li><li><NavLink to="/admin">Admin</NavLink></li></ul>
    } else {
      rightSideLinks = <ul className="nav navbar-nav navbar-right"><li><NavLink to="/logout">Logout</NavLink></li></ul>
    }
    
    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">Team Schedules</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          { sports.length > 0 && sports.map(sport => sport.sub_sports.map(subSport => <SubSportCardNav key={subSport.id} subSport={subSport} />))}
        </ul>
          {rightSideLinks}
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    auth: state.auth,
    sports: state.sports
  });
}


export default connect(mapStateToProps, { getSports })(Header)