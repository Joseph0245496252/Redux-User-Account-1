import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import AddForm from './AddForm'
import EditForm from './EditForm'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export class Board extends Component {



    render() {
        return (
            <Router >
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/add' component={AddForm} />
                    <Route exact path='/edit/:id' component={EditForm} />
                </Switch>
            </Router>
        )
    }
}

export default Board
