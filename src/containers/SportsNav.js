import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';

import SportCardNav from '../components/SportCardNav';
import { getSports } from '../redux/modules/sports/actions';

class SportsNav extends Component {

  componentDidMount() {
    this.props.getSports()
  }

  render() {
    return (
      <NavDropdown eventKey={2} title="Sports" id="basic-nav-dropdown">
        {this.props.sports.map(sport => <SportCardNav key={sport.id} sport={sport} />)}
      </NavDropdown>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    sports: state.sports
  })
}

export default connect(mapStateToProps, {getSports})(SportsNav);
