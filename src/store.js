import { createStore, combineReducers, compose } from 'redux'

import usersListReducer from './reducers/usersListReducer'

const reducer = combineReducers({
    usersList: usersListReducer,
    colorsList: function(state = ['#f00', '#0f0', '#00f']){ return state },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers()
);

export default store
