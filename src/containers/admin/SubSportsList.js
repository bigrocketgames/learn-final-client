import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import SubSportsListCard from '../../components/admin/SubSportsListCard';
import { getSubSports } from '../../redux/modules/subsports/actions';

class SubSportsList extends Component {

  componentDidMount() {
    this.props.getSubSports()
  }

  render() {
    return (
      <div>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Conference Split</th>
              <th>Sub Sport of:</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sub_sports.map(subSport => <SubSportsListCard key={subSport.id} subSport={subSport} />)}
          </tbody>
        </Table>

        {/* add sports form for adding a new sport below the table. */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    sub_sports: state.subSports
  })
}

export default connect(mapStateToProps, {getSubSports})(SubSportsList);