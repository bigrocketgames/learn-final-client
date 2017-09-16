import React from 'react';
import { MenuItem } from 'react-bootstrap';

const SportCard = (sport) => {
  if (sport.sport.sub_sports.length > 0) {
    // return a nested dropdown menu here
    return (
      <p>this needs a nested menu</p>
    )
  } else {
    return (
      <MenuItem eventKey={`3.${sport.sport.id}`} href={`/sport/${sport.sport.id}`}>{sport.sport.name}</MenuItem>
    )
  }
}

export default SportCard;