import React from 'react'; // react-dom requires React in scope
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';

import App from './App';
import LandingPage from './components/LandingPage';
import DrillDownPage from './components/DrillDownPage';

const routes = (
    <Route component={App}>
        <Route path="/" component={LandingPage} />
        <Route path="/drilldown" component={DrillDownPage} />
    </Route>
);

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);