import React, { Component } from 'react'
import ToDoItem from '../components/ToDoItem'

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      info: [{
        todo: 'Mow the Yard',
        day: 'Monday'
      }, {
        todo: 'Rake the Leaves',
        day: 'Tuesday'
      }]
    }
  }

  showToDo = () => {
    console.log('before showToDo')
    this.state.info.map((c) => { return <ToDoItem itemInfo={c} /> })
    console.log('after showToDo')
  };

  addToList = (e) => {
    e.preventDefault()
    const todo = e.target.todoitem.value
    const day = e.target.day.value
    this.setState([{todo: todo, day: day}])
    console.log(`Added ${todo} and ${day} to info.`)
  };


  render() {
    return (
      <div className='container col-4'>
        <div className='row my-5'>
          <h1 className='text-center'>Add to To-Do List</h1>
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

