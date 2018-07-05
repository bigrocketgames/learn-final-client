import react from 'react';
import {Button} from 'react-bootstrap';

const Button = (props) => {

  return(
    <Button bsSize={`props.size`} bsStyle={`props.style`} onClick={props.handleClick}id={props.id}>{props.label}</Button>
  )
}

export default Button