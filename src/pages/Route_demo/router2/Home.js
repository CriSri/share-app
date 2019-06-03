import React from 'react'
import { Link } from 'react-router-dom'
import About from "./../router1/about"
import Main from './../router1/Main'
import Topics from './../router1/topic'
export default class Home extends React.Component{
    render(){
        return (
            //制定路由方式
            
                <div>
                    <ul>
                        <li>
                            <Link to = '/'>Home1</Link>
                        </li>
                        <li>
                            <Link to = '/about'>about2</Link>
                        </li>
                        <li>
                            <Link to = '/topics'>Topics3</Link>
                        </li>  
                    </ul>  
                    <hr/>
                    {this.props.children}
                </div>
         
        );
    }
}