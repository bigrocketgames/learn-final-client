import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const SubSportCardNav = ({subSport}) => {
  return (
    <li role="presentation">
      <NavLink role="menuitem" tabIndex="-1" to={`/sub_sports/${subSport.id}`}>{subSport.name} </NavLink>
    </li>
  )
}

const SportCardNav = ({sport}) => {
  if (sport.sub_sports.length > 0) {
    // return a nested dropdown menu here
    return (
      <NavDropdown eventKey={`3.${sport.id}`} title={`${sport.name}`} id="subSport-nav-dropdown">
        {sport.sub_sports.map(subSport => <SubSportCardNav key={subSport.id} subSport={subSport} />)}
      </NavDropdown>
    )
  } else {
    return (
      <NavLink eventKey={`3.${sport.id}`} to={`/sport/${sport.id}`}>{sport.name}</NavLink>
    )
  }
}

export default SportCardNav;