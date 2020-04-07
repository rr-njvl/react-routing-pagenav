import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    )
  }
}

export default Nav;