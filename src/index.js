import React from 'react'; // react-dom requires React in scope
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { createStore }  from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import App from './App';
import LandingPage from './components/LandingPage';
import ExplorePage from './components/ExplorePage';

const store = createStore(rootReducer);

const routes = (
    <Route component={App}>
        <Route path="/" component={LandingPage} />
        <Route path="/explore" component={ExplorePage} />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);