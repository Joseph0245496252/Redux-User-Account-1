import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '../Redux/actions'

export class Home extends Component {
  
    
    handleDelete = (id) => {
        this.props.deleteUser(id)
    }
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className=' addbtn'>
                        <Link to='/add'>
                            <button id='btn'>
                                Add User
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <div id="tthead">
                            <ul>
                                <li className='col-md-3'>First Name</li>
                                <li className='col-md-3'>Last Name</li>
                                <li className='col-md-3'>Email</li>
                                <li className='col-md-2'>Phone Number</li>
                                <li className='col-md-1 text-center'>Activity</li>
                            </ul>
                        </div>
                        <div className="ttbody">

                            {this.props.users.map(user => {
                                return (
                                    <ul>
                                        <li className='col-md-3'>{user.firstName}</li>
                                        <li className='col-md-3'>{user.lastName}</li>
                                        <li className='col-md-3'>{user.email}</li>
                                        <li className='col-md-2'>{user.phone}</li>
                                        <li className='col-md-1' id='lastchild'>
                                            <Link to={'/edit/' + user.id}><button className='edit'>Edit</button></Link>
                                            <button className='delete' onClick={() => this.handleDelete(user.id)}>X</button></li>

                                    </ul>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state
    }
}

// const mapDispatchToProps = {
//     deleteUser
// }

export default connect(mapStateToProps, {deleteUser})(Home)
