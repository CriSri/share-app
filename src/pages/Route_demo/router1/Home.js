import React from 'react'
import {HashRouter , Route , Link , Switch} from 'react-router-dom'
import About from "./about"
import Main from './Main'
import Topics from './topic'
export default class Home extends React.Component{
    render(){
        return (
            //制定路由方式
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/about'>about</Link>
                        </li>
                        <li>
                            <Link to = '/topics'>Topics</Link>
                        </li>  
                    </ul>  
                    <hr/>
                   <Switch>
                      <Route exact={true} path='/' component={Main}></Route>
                      <Route path='/about' component={About}></Route>
                      <Route path='/topics' component={Topics}></Route>
                   </Switch>

                </div>
            </HashRouter>
        );
    }
}