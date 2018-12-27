import React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from 'reducers';
import thunk from 'redux-thunk';

export default ({children, initialState}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}