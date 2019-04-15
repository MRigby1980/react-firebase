import React from 'react';
import Home from './Home';
import About from './About';
import Account from './Account';
import TestReport1 from './TestReport1';

import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Account" component={Account}/>
            <Route path="/TestReport1" component={TestReport1}/>
        </Switch>
    )
}

export default Routes;