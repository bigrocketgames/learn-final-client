import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Col, Row, Grid } from 'react-bootstrap';

import SportsList from './sportsList';

class Admin extends Component {

  
  render() {
    const { match } = this.props;
    if (localStorage.getItem('team.schedule.user_role') === "admin") {
      return (
        <div className="container">
          <Grid>
            <Row>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Users List</a>
              </Col>
              <Col sm={3} className="text-center">
                <a href="/admin/sports" className="adminLink">Sports List</a>
              </Col>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Sub Sports List</a>
              </Col>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Teams List</a>
              </Col>
            </Row>
          </Grid>

          <Switch>
            <Route path={`${match.url}/sports`} component={SportsList} />
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