import React, { Component } from 'react';

import SubSports from '../../containers/SubSports';

class SubSport extends Component {
  render() {
    const { match } = this.props
    return (
      <SubSports match_url={`${match.url}`}/>
    )
  }
}

export default SubSport