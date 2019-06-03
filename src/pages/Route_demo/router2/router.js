import React from 'react'
import {HashRouter as Router , Route , Link} from 'react-router-dom'
import About from "./../router1/about"
import Main from './../router1/Main'
import Topics from './../router1/topic'
import Home from './Home'
export default class IRouter extends React.Component{
    render(){
        return (
              <Router>
                <Home>
                
                   
                      <Route exact={true} path='/' component={Main}></Route>
                      <Route path='/about' component={About}></Route>
                      <Route path='/topics' component={Topics}></Route>


                </Home>
            </Router>
        )
    }
}