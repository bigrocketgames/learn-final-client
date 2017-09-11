import React, { Component } from 'react';
import { connect } from 'react-redux';

import SportCard from '../components/SportCard';
import { getSports } from '../redux/modules/sports/actions';

class Sports extends Component {

  componentDidMount() {
    this.props.getSports()
  }

  render() {
    return (
      <div>
        {this.props.sports.map(sport => <SportCard key={sport.id} sport={sport} />)}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    sports: state.sports
  })
}

export default connect(mapStateToProps, {getSports})(Sports);
