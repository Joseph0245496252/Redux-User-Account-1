import React, { Component } from 'react'
import {editUser} from '../Redux/actions'
import { connect } from 'react-redux'

export class EditForm extends Component {
    handleEdit = (event)=>{
        event.preventDefault()
        let user = {
            id: this.props.match.params.id,
            firstName:event.target.elements.firstName.value,
            lastName:event.target.elements.lastName.value,
            email:event.target.elements.email.value,
            phone:event.target.elements.phone.value,
        }
        this.props.editUser(user)
        this.props.history.push('/')
    }
    render() {
        const id = this.props.match.params.id
        let user = this.props.users.find(item=>{
            return item.id===id
        })
        return (
            <form onSubmit={this.handleEdit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"
                    name='firstName' defaultValue={user.firstName}/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"
                    name='lastName' defaultValue={user.lastName}/>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"
                    name='email' defaultValue={user.email}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="phone" className="form-control"
                    name='phone'defaultValue={user.phone}/>
                </div>
                <button type="submit" className="btn btn-default">Save Changes</button>
            </form>
        )
    }
}
const mapDispatchToProps = {
    editUser
}

const mapStateToProps = (state)=> {
    return {
        users: state
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (EditForm)
