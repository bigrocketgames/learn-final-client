import React from 'react';
import {Button} from 'react-bootstrap';

const ButtonComp = (props) => {
  return(
    <Button bsSize={props.btnSize} bsStyle={props.btnStyle} onClick={props.handleClick} id={props.id}>{props.label}</Button>
  )
}

export default ButtonComp