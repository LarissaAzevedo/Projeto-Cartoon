import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Cartoon from './pages/Cartoon'
import Favorites from './pages/Favorites'

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cartoon" component={Cartoon} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;