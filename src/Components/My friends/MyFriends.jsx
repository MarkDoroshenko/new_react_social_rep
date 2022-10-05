import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import classes from './MyFriends.module.css'
import { connect } from 'react-redux';

const MyFriends = (props) => {
    let friendsElements = props.friends.map( friend => <FriendItem id={ friend.id } name={ friend.name } avatar={friend.avatar}/> )
    return(
        <div>
            {friendsElements}
        </div>
    )
}

const mapState = (state) => ({
    friends: state.myFriendsPage.friends,
})

const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(MyFriends);