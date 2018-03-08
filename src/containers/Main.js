import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SubSport from '../views/subSport';
import Signup from '../views/signup';
import Home from '../views/home';
import Login from '../views/login';
import Logout from '../views/logout';
import Admin from '../views/admin';
import Schedule from '../views/schedule';
import ChatRoom from '../views/chatRoom';
import NotFound from '../views/404';

class Main extends Component {

  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/sub_sports/:id(\d+)" component={SubSport} />
          <Route exact path="/teams/:id(\d+)/schedule" component={Schedule} />
          <Route exact path="/chat_rooms/:id(\d+)" component={ChatRoom} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default Main