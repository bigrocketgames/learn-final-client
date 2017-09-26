import React from 'react';

import SubSportsDeleteButton from '../../containers/admin/buttons/SubSportsDeleteButton';

const SubSportsListCard = ({subSport}) => {
  const conferenceSplit = subSport.conference_split ? "Yes" : "No"
  return (
    <tr>
      <td>{subSport.name}</td>
      <td>{conferenceSplit}</td>
      <td>{subSport.sport.name}</td>
      <SubSportsDeleteButton subSport={subSport} />
    </tr>
  )
}

export default SubSportsListCard;