import React from 'react';
import { Button } from 'react-bootstrap';

const SubSportsListCard = ({subSport}) => (
  <tr>
    <td>{subSport.id}</td>
    <td>{subSport.name}</td>
    <td>{subSport.conference_split}</td>
    <td>{subSport.sport.name}</td>
    <td><Button bsStyle="danger" bsSize="small">Delete {subSport.name}</Button></td>
  </tr>
)

export default SubSportsListCard;