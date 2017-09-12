import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

class Admin extends Component {

  
  render() {
    if (localStorage.getItem('team.schedule.user_role') === "admin") {
      return (
        <div className="container">
          <Grid>
            <Row>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Users List</a>
              </Col>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Sports List</a>
              </Col>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Sub Sports List</a>
              </Col>
              <Col sm={3} className="text-center">
                <a href="/" className="adminLink">Teams List</a>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    } else {
      return (
        <div className="container text-center">
          <h2>YOU ARE NOT ALLOWED TO VIEW THIS AREA!!  GO AWAY!!</h2>
        </div>
      )
    }
  }
}

export default Admin;