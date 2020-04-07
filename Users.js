import React from 'react';
import UserListing from './UserListing';

class Users extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };
  constructor(props) {
    super(props);
    this.name = props.name;
    this.users = [];
  }

  componentWillMount() { 
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <div className="users">
        <div>
          <h2>{this.name}</h2>
          <p>Display all the users in table format from external JSON service using FETCH()</p>
        </div>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <table id="users">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
            {users.map(usr => (
              <UserListing user={usr} />  
            ))}
          </table>
        ):(
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default Users;