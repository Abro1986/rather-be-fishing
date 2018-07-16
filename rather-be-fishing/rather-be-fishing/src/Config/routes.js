import React from 'react';

import {
  Route,
  Switch
} from 'react-router-dom';
import Signup from '../Components/signup';
import Dashboard from '../Components/dashboard';
import Spot from '../Components/spot'


export default (
    <Switch>
      <Route  exact path='/' component={ Signup }/>
      <Route  path='/dashboard' component={ Dashboard}/>
      <Route  path='/spot' component={ Spot}/>
    </Switch>
)
