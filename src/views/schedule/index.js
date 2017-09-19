import React, { Component } from 'react';

import Schedules from '../../containers/Schedules';

class Schedule extends Component {


  render() {
    const { match } = this.props
    return (
      <div>
        <Schedules match_url={`${match.url}`} match_params_id={`${match.params.id}`} />
      </div>
    )
  }
}

export default Schedule