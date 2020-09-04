import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home'
import About from './About'
import Login from './Login'
import PostDetail from './PostDetail'
import AddForm from './AddForm'
import ChoiceTable from './ChoiceTable';
import ChoiceContextProvider from '../context/ChoiceContext';

function Menu(){
    return(
        <Router>
            <nav className="nav nav-dark justify-content-center pt-3 pd-3">
                <Link 
                className="nav-link active" 
                to='/home'>
                    Home
                </Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/login">Login</Link>
            </nav>
            <ChoiceContextProvider>
                <Switch>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home/posts/:id" component={PostDetail}></Route>
                    <Route path="/home/add" component={AddForm}></Route>
                    <Route path="/home/choice" component={ChoiceTable}></Route>
                </Switch>
            </ChoiceContextProvider>
        </Router>
    )
}

export default Menu;