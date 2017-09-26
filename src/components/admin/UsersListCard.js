import React from 'react';
import { Button } from 'react-bootstrap';

const UsersListCard = ({user}) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.admin.toString()}</td>
      <td><Button bsStyle="warning" bsSize="small">Make Admin</Button></td>
      <td><Button bsStyle="danger" bsSize="small">Delete User</Button></td>
    </tr>
  )
}

export default UsersListCard;