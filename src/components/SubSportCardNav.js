import React from 'react';
import { MenuItem } from 'react-bootstrap';

const SubSportCardNav = (subSport) => {
  return (
    <MenuItem eventKey={`3.x.${subSport.subSport.id}`} href={`/sub_sports/${subSport.subSport.id}`}>{subSport.subSport.name}</MenuItem>
  )
}

export default SubSportCardNav