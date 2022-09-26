import React from 'react';
import classes from './FriendItem.module.css'

const FriendItem = (props) => {

    return(
        <div>
            <div>
                <img className={classes.avatarImgDialog} src={ props.avatar } alt='avatar'/>
            </div>
            <div className={classes.name}>
                { props.name }
            </div>
        </div>
    )
}
export default FriendItem;