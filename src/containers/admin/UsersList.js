import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import UsersListCard from '../../components/admin/UsersListCard';
import { getUsers } from '../../redux/modules/users/actions';

class UsersList extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Upgrade to Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => <UsersListCard key={user.id} user={user} />)}
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

export default connect(mapStateToProps, {getUsers})(UsersList);