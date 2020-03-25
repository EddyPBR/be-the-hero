import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// importando paginas
import Logon from './pages/Logon';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    );
}