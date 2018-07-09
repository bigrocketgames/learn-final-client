import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import UsersListCard from '../../components/admin/UsersListCard';
import { getUsers, upgradeUser, downgradeUser, RemoveUser } from '../../redux/modules/users/actions';
import { bindActionCreators } from 'redux';

class UsersList extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  upgradeUser = (e) => {
    this.props.upgradeUser(this.props.user.id);
  }

  downgradeUser = (e) => {
    this.props.downgradeUser(this.props.user.id);
  }

  deleteUser = (e) => {
    this.props.RemoveUser(e.target.id);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Users List</h2>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Upgrade to Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => <UsersListCard key={user.id} user={user} upgradeUser={this.upgradeUser} downgradeUser={this.downgradeUser} deleteUser={this.deleteUser} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    users: state.users
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUsers: getUsers,
    upgradeUser: upgradeUser,
    downgradeUser: downgradeUser,
    RemoveUser: RemoveUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);