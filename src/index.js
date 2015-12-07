import React from 'react'; // react-dom requires React in scope
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';

import App from './App';
import LandingPage from './components/LandingPage';
import ExplorePage from './components/ExplorePage';

const routes = (
    <Route component={App}>
        <Route path="/" component={LandingPage} />
        <Route path="/explore" component={ExplorePage} />
    </Route>
);

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);