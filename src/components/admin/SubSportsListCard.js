import React from 'react';

import SubSportsDeleteButton from '../../containers/admin/SubSportsDeleteButton';

const SubSportsListCard = ({subSport}) => (
  <tr>
    <td>{subSport.id}</td>
    <td>{subSport.name}</td>
    <td>{subSport.conference_split.toString()}</td>
    <td>{subSport.sport.name}</td>
    <SubSportsDeleteButton subSport={subSport} />
  </tr>
)

export default SubSportsListCard;