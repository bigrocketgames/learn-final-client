import React from 'react';

import UpgradeUserButton from '../../containers/admin/buttons/UpgradeUserButton';
import RemoveUserButton from '../../containers/admin/buttons/RemoveUserButton';

const UsersListCard = ({user}) => {
  const role = user.admin ? "Admin" : "User"

  return (
    <tr>
      <td>{user.email}</td>
      <td>{role}</td>
      <td><UpgradeUserButton user={user}/></td>
      <td><RemoveUserButton user={user}/></td>
    </tr>
  )
}

export default UsersListCard;