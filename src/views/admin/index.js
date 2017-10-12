import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Col, Row, Grid } from 'react-bootstrap';

import UsersList from '../../containers/admin/UsersList';
import SportsList from '../../containers/admin/sportsList';
import SubSportsList from '../../containers/admin/SubSportsList';
import TeamsList from '../../containers/admin/TeamsList';
import GamesList from '../../containers/admin/GamesList';
import GameEdit from '../../containers/admin/GameEdit';

class Admin extends Component {

  
  render() {
    const { match } = this.props;
    if (localStorage.getItem('team.schedule.user_role') === "admin") {
      return (
        <div className="container">
          <Grid>
            <Row>
              <Col sm={4} className="text-center">
                <Link to={"/admin/users"} className="adminLink">Users List</Link>
              </Col>
              <Col sm={4} className="text-center">
                <Link to={"/admin/sports"} className="adminLink">Sports List</Link>
              </Col>
              <Col sm={4} className="text-center">
                <Link to={"/admin/sub_sports"} className="adminLink">Sub Sports List</Link>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="text-center">
                <Link to={"/admin/teams"} className="adminLink">Teams List</Link>
              </Col>
              <Col sm={4} className="text-center">
                <Link to={"/admin/games"} className="adminLink">Games List</Link>
              </Col>
            </Row>
            <br/>
          </Grid>

          <Switch>
            <Route path={`${match.url}/users`} component={UsersList} />
            <Route path={`${match.url}/sports`} component={SportsList} />
            <Route path={`${match.url}/sub_sports`} component={SubSportsList} />
            <Route path={`${match.url}/teams`} component={TeamsList} />
            <Route exact path={`${match.url}/games/:id/edit`} component={GameEdit} />
            <Route exact path={`${match.url}/games`} component={GamesList} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="container text-center">
          <Redirect to="/"/>
        </div>
      )
    }
  }
}

export default Admin;