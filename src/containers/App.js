import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from '../history';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

import Sports from './Sports';
import Signup from '../views/signup';
import Home from '../views/home';
import Login from '../views/login';
import Admin from '../views/admin';

const NotFound = () => <div>NotFound</div>

function isLoggedin(state) {
  debugger
}

class App extends Component {
  render() {
    let adminLink = null;
    if (localStorage.getItem('team.schedule.user_role') === "admin") {
      adminLink = <NavItem eventKey={5} href="/admin">Admin</NavItem>;
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
              <NavDropdown eventKey={2} title="Sports" id="basic-nav-dropdown">
              <Sports />
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={3} href="/signup">Signup</NavItem>
              <NavItem eventKey={4} href="/login">Login</NavItem>
              {adminLink}
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;