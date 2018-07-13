import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';

import SubSportsListCard from '../../components/admin/SubSportsListCard';
import { getSubSports, deleteSubSport } from '../../redux/modules/subsports/actions';
import AddSubSportForm from './forms/addSubSportForm';

class SubSportsList extends Component {

  componentDidMount() {
    this.props.getSubSports()
  }

  deleteSubSport = (e) => {
    const subSportId = Number(e.target.id)
    this.props.deleteSubSport(subSportId);
  }

  render() {
    if (this.props.sub_sports.length > 0) {
      return (
        <div>
          <h2 className="text-center">Sub Sports List</h2>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Conference Split</th>
                <th>Sub Sport of:</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.sub_sports.map(subSport => <SubSportsListCard key={subSport.id} subSport={subSport} handleClick={this.deleteSubSport} />)}
            </tbody>
          </Table>

          <AddSubSportForm />
        </div>
      )
    } else {
      return (
        <div>
          <AddSubSportForm />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    sub_sports: state.subSports
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSubSports: getSubSports,
    deleteSubSport: deleteSubSport
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubSportsList);