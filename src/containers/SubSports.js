import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSubSport } from '../redux/modules/subsports/actions';
import SubSportsCard from '../components/SubSportsCard';

class SubSports extends Component {
  
  componentDidMount() {
    this.props.getSubSport(this.props.match_url);
  }

  render() {
    return(
        <SubSportsCard subSport={this.props.sub_sports} />
    )
  }


}

const MapStateToProps = (state) => {
  return({
    sub_sports: state.subSports
  })
}

export default connect((MapStateToProps), {getSubSport})(SubSports)