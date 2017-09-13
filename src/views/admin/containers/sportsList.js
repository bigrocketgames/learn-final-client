import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import SportsListCard from '../components/SportsListCard';
import { getSports } from '../../../redux/modules/sports/actions';

class SportsList extends Component {

  componentDidMount() {
    this.props.getSports()
  }

  render() {
    return (
      <div>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sports.map(sport => <SportsListCard key={sport.id} sport={sport} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    sports: state.sports
  })
}

export default connect(mapStateToProps, {getSports})(SportsList);