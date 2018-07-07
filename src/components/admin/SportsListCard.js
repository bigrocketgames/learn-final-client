import React from 'react';

import ButtonComp from '../../containers/ButtonComp';

const SportsListCard = (props) => (
  <tr>
    <td>{props.sport.name}</td>
    <td><ButtonComp btnSize="small" btnStyle="danger" handleClick={props.handleClick} id={props.sport.id} label={`Delete ${props.sport.name}`} /></td>
  </tr>
)

export default SportsListCard;