import React from 'react';

import ButtonComp from '../../containers/ButtonComp';

const UsersListCard = (props) => {
  const {user} = props
  const role = user.admin ? "Admin" : "User"
  const buttonFunction = user.admin ? props.downgradeUser : props.upgradeUser
  const buttonLabel = user.admin ? "Remove Admin" : "Make Admin"

  return (
    <tr>
      <td>{user.email}</td>
      <td>{role}</td>
      <td><ButtonComp btnSize="small" btnStyle="warning" id={user.id} handleClick={buttonFunction} label={buttonLabel} /></td>
      <td><ButtonComp btnSize="small" btnStyle="danger" id={user.id} handleClick={props.deleteUser} label={"Delete User"}  /></td>
    </tr>
  )
}

export default UsersListCard;