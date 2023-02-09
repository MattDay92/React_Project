import React, { Component } from 'react'

export default class ToDo extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <>
        <div className='container col-4'>
          <div className='row my-5'>
            <h1 className='text-center'>Add to To-Do List</h1>
            <form className='text-center' onSubmit={this.props.addToList}>
              <input className='form-control' type='text' placeholder='To-Do' name='todoitem' />
              <input className='form-control' type='text' placeholder='Day' name='day' />
              <button className='btn btn-primary' type='submit'>Add to List</button>
            </form>
          </div>
        </div>
        <div className='container col-8'>
          <div className='row'>
            {this.props.info.length === 0 ? <p className='text-center'>Nothing To-Do Yet...</p> : this.props.showToDo()}
          </div>
          <div className='text-center my-2'>
            {this.props.info.length === 0 ? <p></p> : <button onClick={this.props.removeFromList} className='btn btn-danger'>Remove All</button>}
          </div>
        </div>
      </>

    )
  }
}

