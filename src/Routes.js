import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup'
import Signin from './user/Signin';
function Routes()
{
    return(
       <Router>
           <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/signup' component={Signup}/>
               <Route path='/signin' component={Signin}/>
           </Switch>
       </Router>
    );
}

export default Routes;