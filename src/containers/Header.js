import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import SportsNav from './SportsNav';

class Header extends Component {
  render() {
    let adminLink = null;
    let signUpLink = null;
    let loginLink = null;
    let logoutLink = null;
  
    if (!this.props.auth.isAuthenticated) {
      signUpLink = <NavItem eventKey={3} href="/signup">Signup</NavItem>;
      loginLink = <NavItem eventKey={4} href="/login">Login</NavItem>;
    } else if (this.props.auth.currentUser.admin) {
      logoutLink = <NavItem eventKey={3} href="/logout">Logout</NavItem>;
      adminLink = <NavItem eventKey={4} href="/admin">Admin</NavItem>;
    } else {
      logoutLink = <NavItem eventKey={3} href="/logout">Logout</NavItem>;
    }
    return(
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Team Schedules</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <SportsNav />
        </Nav>
        <Nav pullRight>
          {signUpLink}
          {loginLink}
          {logoutLink}
          {adminLink}
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}


export default connect(mapStateToProps)(Header)