import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

export const configureStore = () => {

    const store = createStore(
        combineReducers({ ...reducers }),
        compose(applyMiddleware(thunk))
    );

    return store;
};
