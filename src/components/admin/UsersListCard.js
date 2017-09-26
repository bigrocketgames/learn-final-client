import React from 'react';
import { Button } from 'react-bootstrap';

import UpgradeUserButton from '../../containers/admin/buttons/UpgradeUserButton';

const UsersListCard = ({user}) => {
  const role = user.admin ? "Admin" : "User"

  return (
    <tr>
      <td>{user.email}</td>
      <td>{role}</td>
      <td><UpgradeUserButton user={user}/></td>
      <td><Button bsStyle="danger" bsSize="small">Delete User</Button></td>
    </tr>
  )
}

export default UsersListCard;