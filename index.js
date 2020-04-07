import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Home from './Home';
import Users from './Users';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Users Listing'
    };
  }

  render() {
    return (
      <div className="container">
        <div className="navigation">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <Users name={this.state.name} />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
