import React from 'react';

import SportsDeleteButton from '../../containers/admin/SportsDeleteButton';



const SportsListCard = ({sport}) => (
  <tr>
    <td>{sport.id}</td>
    <td>{sport.name}</td>
    <SportsDeleteButton sport={sport} />
  </tr>
)

export default SportsListCard;