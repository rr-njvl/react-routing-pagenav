import React from 'react';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/users">Products</NavLink>
        </li>
      </ul>
    )
  }
}

export default Nav;