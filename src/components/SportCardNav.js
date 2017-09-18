import React from 'react';
import { MenuItem, NavDropdown } from 'react-bootstrap';
import SubSportCardNav from './SubSportCardNav.js';

const SportCardNav = (sport) => {
  if (sport.sport.sub_sports.length > 0) {
    // return a nested dropdown menu here
    return (
      <NavDropdown eventKey={`3.${sport.sport.id}`} title={`${sport.sport.name}`} id="subSport-nav-dropdown">
        {sport.sport.sub_sports.map(subSport => <SubSportCardNav key={subSport.id} subSport={subSport} />)}
      </NavDropdown>
    )
  } else {
    return (
      <MenuItem eventKey={`3.${sport.sport.id}`} href={`/sport/${sport.sport.id}`}>{sport.sport.name}</MenuItem>
    )
  }
}

export default SportCardNav;