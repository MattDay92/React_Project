import React, { Component } from 'react'
import Nav from './components/Nav';
import Login from './views/Login';
import SignUp from './views/SignUp';
import ToDo from './views/ToDo'
import ToDoItem from './components/ToDoItem';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      new_info: '',
      user: {}
    }
  }

  logMeIn = (user) => {
    this.setState({user: {user}})
  };
  logMeOut = () => {
    this.setState({user: {}})
  };


  addToList = (e) => {
    e.preventDefault()
    const todo = e.target.todoitem.value
    console.log(this)
    const day = e.target.day.value
    this.setState(this.state.info = [...this.state.info, { todo: todo, day: day }])
    console.log(this.state.info)
    console.log(`Added ${todo} and ${day} to info.`)
  };

  showToDo = () => {
    console.log('before showToDo')
    return this.state.info.map((c, i) => { return <ToDoItem key={i} itemInfo={c} /> })
  };

  removeFromList = () => {
    this.setState({ info: [] })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav user={this.state.user} logMeOut={this.logMeOut}/>
          <Routes>
            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/' element={<ToDo info={this.state.info} addToList={this.addToList} showToDo={this.showToDo} removeFromList={this.removeFromList} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

