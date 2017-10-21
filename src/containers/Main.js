import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import SubSport from '../views/subSport';
import Signup from '../views/signup';
import Home from '../views/home';
import Login from '../views/login';
import Logout from '../views/logout';
import Admin from '../views/admin';
import Schedule from '../views/schedule';
import NotFound from '../views/404';

class Main extends Component {

  render() {
    return(
      <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/sub_sports/:id(\d+)" component={SubSport} />
          <Route exact path="/teams/:id(\d+)/schedule" component={Schedule} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default Main