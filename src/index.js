import React from 'react'; // react-dom requires React in scope
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { createStore, applyMiddleware }  from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import App from './App';
import LandingPage from './components/LandingPage';
import ExplorePage from './components/ExplorePage';

const store = applyMiddleware(thunk)(createStore)(rootReducer);

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