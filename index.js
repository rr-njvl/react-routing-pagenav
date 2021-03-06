import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Products Listing'
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
                  <Products name={this.state.name} />
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
