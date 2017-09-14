import React from 'react';
import { Button } from 'react-bootstrap';

const SportsListCard = ({sport}) => (
  <tr>
    <td>{sport.id}</td>
    <td>{sport.name}</td>
    <td><Button bsStyle="danger" bsSize="small">Delete {sport.name}</Button></td>
  </tr>
)

export default SportsListCard;