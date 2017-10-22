import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import SportsNav from './SportsNav';

class Header extends Component {
  render() {
    let rightSideLinks = null;
  
    if (!this.props.auth.isAuthenticated) {
      rightSideLinks = <ul className="nav navbar-nav navbar-right"><li><NavLink to="/signup">Signup</NavLink></li><li><NavLink to="/login">Login</NavLink></li></ul>
    } else if (this.props.auth.currentUser.admin) {
      rightSideLinks = <ul className="nav navbar-nav navbar-right"><li><NavLink to="/logout">Logout</NavLink></li><li><NavLink to="/admin">Admin</NavLink></li></ul>
    } else {
      rightSideLinks = <ul className="nav navbar-nav navbar-right"><li><NavLink to="/logout">Logout</NavLink></li></ul>
    }
    return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">Team Schedules</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <SportsNav />
        </ul>
          {rightSideLinks}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}


export default connect(mapStateToProps)(Header)