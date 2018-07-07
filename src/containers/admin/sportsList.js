import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import SportsListCard from '../../components/admin/SportsListCard';
import { getSports, deleteSport } from '../../redux/modules/sports/actions';
import AddSportForm from './forms/addSportForm';

class SportsList extends Component {

  componentDidMount() {
    this.props.getSports()
  }

  deleteSport = (e) => {
    const sportId = Number(e.target.id)
    this.props.deleteSport(sportId);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Sports List</h2>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sports.map(sport => <SportsListCard key={sport.id} sport={sport} handleClick={this.deleteSport} />)}
          </tbody>
        </Table>
        <AddSportForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    sports: state.sports
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSports: getSports,
    deleteSport: deleteSport
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsList);