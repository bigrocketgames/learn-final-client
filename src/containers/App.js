import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import Signup from '../views/signup';
import Home from '../views/home';
import Login from '../views/login';



// const API_URL = process.env.REACT_APP_API_URL;

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    background: '#18121e',
    padding: '6px',
  },

  navlink: {
    textDecoration: 'none',
    padding: '6px',
    color: 'white',
    ':hover': {
      background: '#fff',
      color: '#18121e'
    }
  }
})

const NotFound = () => <div>NotFound</div>

function isAdmin() {
  if (localStorage.getItem('team.schedule.user_role') === "admin") {
    return true;
  }
  return false;
}

function isLoggedin(state) {
  debugger
}

class App extends Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     sports: []
  //   }
  // }

  // componentDidMount() {
  //   fetch(`${API_URL}/sports`)
  //     .then(response => response.json())
  //     .then(sports => this.setState({ sports }))
  // }



  render() {
    let adminLink = null;
    if (isAdmin() === true) {
      adminLink = <NavItem eventKey={5} href="/">Admin Link</NavItem>;
    }
    return(
      <Router>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Team Schedules</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/">Home</NavItem>
              <NavDropdown eventKey={2} title="Sports" id="sports-nav-dropdown">

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
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;