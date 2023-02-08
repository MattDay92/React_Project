import React, { Component } from 'react'
import ToDoItem from '../components/ToDoItem'

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      new_info: ''
    }
  }

  showToDo = () => {
    console.log('before showToDo')
    return this.state.info.map((c) => { return <ToDoItem itemInfo={c} /> })
  };

  addToList = (e) => {
    e.preventDefault()
    const todo = e.target.todoitem.value
    console.log(this)
    const day = e.target.day.value
    this.setState(this.state.info = [...this.state.info, { todo: todo, day: day}])
    this.showToDo()
    console.log(this.state.info)
    console.log(`Added ${todo} and ${day} to info.`)
  };


  render() {
    return (
      <div className='container col-4'>
        <div className='row my-5'>
          <h1 className='text-center'>Add to To-Do List</h1>
          <form className='text-center' onSubmit={this.addToList}>
            <input className='form-control' type='text' placeholder='To-Do' name='todoitem'/>
            <input className='form-control' type='text' placeholder='Day' name='day'/>
            <button className='btn btn-primary' type='submit'>Add to List</button>
          </form>
        </div>
        <div className='row'>
          {this.state.info.length === 0?<p className='text-center'>Nothing To-Do Yet...</p>:this.showToDo()}
        </div>
      </div>
    )
  }
}

