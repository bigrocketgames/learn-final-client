import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from '../history';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import SportsNav from './SportsNav';

import SubSport from '../views/subSport';
import Signup from '../views/signup';
import Home from '../views/home';
import Login from '../views/login';
import Logout from '../views/logout';
import Admin from '../views/admin';
import NotFound from '../views/404';

class App extends Component {
  render() {
    let adminLink = null;
    let signUpLink = null;
    let loginLink = null;
    let logoutLink = null;

    if (localStorage.getItem('team.schedule.user_role') === null) {
      signUpLink = <NavItem eventKey={3} href="/signup">Signup</NavItem>;
      loginLink = <NavItem eventKey={4} href="/login">Login</NavItem>;
    } else if (localStorage.getItem('team.schedule.user_role') === "admin") {
      logoutLink = <NavItem eventKey={3} href="/logout">Logout</NavItem>;
      adminLink = <NavItem eventKey={4} href="/admin">Admin</NavItem>;
    } else {
      logoutLink = <NavItem eventKey={3} href="/logout">Logout</NavItem>;
    }
    
    return(
      <Router history={history}>
        <div className="App">
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

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/sub_sports/:id(\d+)" component={SubSport} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;