import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
//bringing in my store setup file and calling it Store
import Store from './store';

//defining my store function to pass to the provider
const store = Store();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
