import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar'

import Home from './pages/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid" >
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
