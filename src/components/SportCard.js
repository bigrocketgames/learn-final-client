import React from 'react';
import { MenuItem } from 'react-bootstrap';

const SportCard = ({sport}) => (
  <MenuItem eventKey={`3.${sport.id}`} href={`/sport/${sport.id}`}>{sport.name}</MenuItem>
)

export default SportCard;