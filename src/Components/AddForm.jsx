import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addUser} from '../Redux/actions.js'

export class AddForm extends Component {
    handleAddUser = (event)=>{
        event.preventDefault()
        let user = {
            id: Math.random().toString(36).substr(2, 5),
            firstName:event.target.elements.firstName.value,
            lastName:event.target.elements.lastName.value,
            email:event.target.elements.email.value,
            phone:event.target.elements.phone.value,
        }
        this.props.addUser(user)
        this.props.history.push('/')
    }
    render() {
        return (
            <form onSubmit={this.handleAddUser}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"placeholder="First Name" 
                    name='firstName'/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"placeholder="Last Name" 
                    name='lastName'/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" 
                    name='email'/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="phone" className="form-control" placeholder="Phone" 
                    name='phone'/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}
const mapDispatchToProps = {
    addUser
}
export default connect (null, mapDispatchToProps)(AddForm)
