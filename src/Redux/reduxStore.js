import { combineReducers, createStore } from 'redux';
import myFriendsReducer from './myFriendsReducer';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

let reducers = combineReducers( {
    messagesPage: messagesReducer,
    myFriendsPage: myFriendsReducer,
    profilePage: profileReducer,
} );
let store = createStore( reducers );

export default store;
