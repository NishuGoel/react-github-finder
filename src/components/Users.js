import React, { Component } from 'react';

export class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            {' '}
            {user.name}
            <div src={user.username} />
            <div src={user.email} />
            <div src={user.phone} />
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
