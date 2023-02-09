import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className='container my-5'>
                <h1 className='row d-flex justify-content-center'>SignUp</h1>
                <div className='row d-flex justify-content-center my-5'>
                    <form className='col-3 text-center'>
                        <input type='text' className='form-control' placeholder='Username'></input>
                        <input type='text' className='form-control' placeholder='Password'></input>
                        <button type='submit' className='btn btn-primary my-2'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
