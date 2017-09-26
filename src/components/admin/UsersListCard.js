import React from 'react';
import { Button } from 'react-bootstrap';

const UsersListCard = ({user}) => {
  const role = user.admin ? "Admin" : "User"

  return (
    <tr>
      <td>{user.email}</td>
      <td>{role}</td>
      <td><Button bsStyle="warning" bsSize="small">Make Admin</Button></td>
      <td><Button bsStyle="danger" bsSize="small">Delete User</Button></td>
    </tr>
  )
}

export default UsersListCard;