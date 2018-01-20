import React from 'react';
import { NavLink } from 'react-router-dom';

export const SubSportCardNav = ({subSport}) => {
  return (
    <li role="presentation">
      <NavLink to={`/sub_sports/${subSport.id}`}>{subSport.name} </NavLink>
    </li>
  )
}

export default SubSportCardNav;