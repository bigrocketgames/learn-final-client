import React from 'react';
import { Button } from 'react-bootstrap';

const SportsListCard = ({sport}) => (
  <tr>
    <td>{sport.id}</td>
    <td>{sport.name}</td>
    <td><Button bsStyle="danger">Delete Sport</Button></td>
  </tr>
)


// const SportCard = ({sport}) => (


export default SportsListCard;