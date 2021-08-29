import React from 'react' 
import { SwitchCase, Route, BrowserRouter, Switch } from 'react-router-dom'
import Register from './Register'
import Lead from './Lead'
import configLeadAdd from './configLeadAdd'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => <Register/>}></Route>
                <Route path='/lead' exact component= {Lead}/>
                <Route path="/lead/addLead" exact component = {configLeadAdd}></Route>
            </Switch>
        </BrowserRouter>
    )
}