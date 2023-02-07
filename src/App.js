import React, { Component } from 'react'
import Nav from './Nav';
import Login from './Login';
import Logout from './Logout';

export default class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
      <Nav />
      <br/>
      <Login />
      <br/>
      <Logout />
      </div>
    )
  }
}

