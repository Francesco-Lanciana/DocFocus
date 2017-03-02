import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import routes from 'routes';
import {configureStore} from 'configureStore';

let store = configureStore();

// Load foundation
$(document).ready(() => {
    $(document).foundation();
});

// Import styles
require('style!css!sass!applicationStyles');

require('./styles/js/_nav');

function renderApp() {
    // We now render `<AppContainer>` instead of our App component.
    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>,
        document.getElementById('app')
    );
}

renderApp(); // Renders App on init