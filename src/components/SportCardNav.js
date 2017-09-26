import React from 'react';
import { MenuItem, NavDropdown } from 'react-bootstrap';

export const SubSportCardNav = ({subSport}) => {
  return (
    <MenuItem eventKey={`3.x.${subSport.id}`} href={`/sub_sports/${subSport.id}`}>{subSport.name}</MenuItem>
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
      <MenuItem eventKey={`3.${sport.id}`} href={`/sport/${sport.id}`}>{sport.name}</MenuItem>
    )
  }
}

export default SportCardNav;