import React, { Component } from 'react'

export default class ToDoItem extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.itemInfo.todo}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.dayInfo.day}</h6>
                        <a href="#" className="card-link">Mark as Done</a>
                    </div>
                </div>
            </div>
        )
    }
}
