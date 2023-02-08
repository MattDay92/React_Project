import React, { Component } from 'react'

export default class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className='d-flex justify-content-center my-2 text-center'>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.itemInfo.todo}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.itemInfo.day}</h6>
                        <a href="#" className="card-link text-primary">Mark as Done</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
