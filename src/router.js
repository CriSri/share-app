import { HashRouter , Link ,Switch , Route} from 'react-router-dom'
import React from 'react' 
import App from './App'
import Login from './pages/login/about'
import Admin from './Admin'
import Button from './pages/ui/button'
import NotFound from './pages/noMatch/nomatch'
export default class AppRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Button}></Route>
                        <Route path='/admin' render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/ui/buttons' component={Button}></Route>
                                    <Route component={NotFound}></Route>
                                </Switch>
                            </Admin>
                            
                        }></Route>
                        <Route path = '/order/detail' component={Login}></Route>
                    </Switch>

                </App>
            </HashRouter>
        )
    }
}