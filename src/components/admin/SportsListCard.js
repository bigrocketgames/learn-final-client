import React from 'react';

import SportsDeleteButton from '../../containers/admin/buttons/SportsDeleteButton';

const SportsListCard = ({sport}) => (
  <tr>
    <td>{sport.name}</td>
    <SportsDeleteButton sport={sport} />
  </tr>
)

export default SportsListCard;