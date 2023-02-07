import React, { Component } from 'react'

export default class Logout extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='row d-flex justify-content-center'>Logout</h1>
                <div className='row d-flex justify-content-center my-5'>
                    <form className='col-3 text-center'>
                        <input type='text' className='form-control' placeholder='Username'></input>
                        <input type='text' className='form-control' placeholder='Passholder'></input>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
