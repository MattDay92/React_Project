import React, { Component } from 'react'
import Nav from './components/Nav';
import Login from './views/Login';
import Logout from './views/Logout';
import ToDo from './views/ToDo'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/todo' element={<ToDo />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

