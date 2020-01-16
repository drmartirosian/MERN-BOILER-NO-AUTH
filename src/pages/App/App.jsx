import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {name:"Daniel"};
  }
  render() {
    return (
      <div>
        <header>Header</header>
        <Switch>
          <Route exact path='/' render={() => <HomePage /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
