import React from 'react';

import ButtonComp from '../../containers/ButtonComp';

const SubSportsListCard = (props) => {
  const {subSport} = props
  const conferenceSplit = subSport.conference_split ? "Yes" : "No"
  return (
    <tr>
      <td>{subSport.name}</td>
      <td>{conferenceSplit}</td>
      <td>{subSport.sport.name}</td>
      <td><ButtonComp btnSize="small" btnStyle="danger" handleClick={props.handleClick} id={subSport.id} label={`Delete ${subSport.name}`} /></td>
    </tr>
  )
}

export default SubSportsListCard;