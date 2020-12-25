import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import userReducer from './ducks/user';

const middlewares = [logger];

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;