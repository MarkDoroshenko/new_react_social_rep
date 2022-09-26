import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import classes from './MyFriends.module.css'

const MyFriends = (props) => {
    let friendsElements = props.state.friends.map( friend => <FriendItem id={ friend.id } name={ friend.name } avatar={friend.avatar}/> )
    return(
        <div>
            {friendsElements}
        </div>
    )
}

export default MyFriends;