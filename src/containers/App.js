import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
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
    console.log(this.state)
    return(
      <Router>
        <div className="App">
          <div className="navbar">
            <div className={css(styles.navbar)}>
              <NavLink className={css(styles.navlink)} to="/">Home</NavLink>
              <NavLink className={css(styles.navlink)} to="/signup">Signup</NavLink>
              <NavLink className={css(styles.navlink)} to="/login">Login</NavLink>
            </div>
          </div>

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