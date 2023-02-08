import React, { Component } from 'react'
import ToDoItem from '../components/ToDoItem'

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    }
  }

  showToDo = () => {
    console.log('before showToDo')
    return this.state.info.map((c) => { return <ToDoItem itemInfo={c} /> })
    console.log('after showToDo')
  };

  addToList = (e) => {
    e.preventDefault()
    const todo = e.target.todoitem.value
    const day = e.target.day.value
    this.setState({info: {todo: todo, day: day}})
    console.log(`Added ${todo} and ${day} to info.`)
  };


  render() {
    return (
      <div className='container col-8'>
        <div className='row'>
          <form onSubmit={this.addToList}>
            <input className='form-control' type='text' placeholder='To-Do' name='todoitem'/>
            <input className='form-control' type='text' placeholder='Day' name='day'/>
            <button className='btn btn-primary' type='submit'>Add to List</button>
          </form>
        </div>
        <div className='row'>
          {this.state.info.length === 0?<p>Nothing To-Do Yet</p>:this.showToDo()}
        </div>
      </div>
    )
  }
}

