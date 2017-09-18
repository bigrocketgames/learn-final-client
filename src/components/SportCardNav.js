import React from 'react';
import { MenuItem, NavDropdown } from 'react-bootstrap';

export const SubSportCardNav = (subSport) => {
  return (
    <MenuItem eventKey={`3.x.${subSport.subSport.id}`} href={`/sub_sports/${subSport.subSport.id}`}>{subSport.subSport.name}</MenuItem>
  )
}

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