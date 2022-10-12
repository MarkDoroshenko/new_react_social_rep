import { combineReducers, createStore } from 'redux';
import myFriendsReducer from './myFriendsReducer';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers( {
    messagesPage: messagesReducer,
    myFriendsPage: myFriendsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
} );
let store = createStore( reducers );

export default store;
