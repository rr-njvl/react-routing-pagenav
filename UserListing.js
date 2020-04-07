import React from 'react';

class UserListing extends React.Component {
  constructor(props) {
    this.id = props.user.id;
    this.name = props.user.name;
    this.email = props.user.email;
    this.city = props.user.address.city;
  }

  render() {
    return (
      <tr>
        <td>{this.id}</td>
        <td>{this.name}</td>
        <td>{this.email}</td>        
        <td>{this.city}</td>
      </tr>
    );
  }
}

export default UserListing;
