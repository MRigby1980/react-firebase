import React from 'react';
import Home from './Home';
import About from './About';
import Account from './Account';

import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Account" component={Account}/>
        </Switch>
    )
}

export default Routes;