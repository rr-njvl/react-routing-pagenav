import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Nav from './Nav';
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
              <Nav />
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
