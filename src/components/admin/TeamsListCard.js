import React from 'react';
import { Button } from 'react-bootstrap';

const TeamsListCard = ({team}) => (
  <tr>
    <td>{team.id}</td>
    <td>{team.fullname}</td>
    <td>{team.stadium_location}</td>
    <td>{team.sub_sport.name}</td>
    <td><Button bsStyle="danger" bsSize="small">Delete {team.fullname}</Button></td>
  </tr>
)

export default TeamsListCard;