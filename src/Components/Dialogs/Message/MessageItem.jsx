import React from 'react';
import classes from './MessageItem.module.css'


const MessageItem = ( props ) => {
    if ( props.name === 'You' ) {
        return (
            <div className={ classes.message }>
                <div className={ classes.avatarToRight }>
                    { props.message }
                </div>
                <div className={ classes.avatarBlock }>
                    <div>
                        <img className={ classes.avatarImgDialog } src={ props.avatar } alt='avatar'/>
                    </div>
                    <div className={ classes.name }>
                        { props.name }
                    </div>
                </div>
            </div>
        )
    } else return (
        <div className={ classes.message }>
            <div className={ classes.avatarBlock }>
                <div>
                    <img className={ classes.avatarImgDialog } src={ props.avatar } alt='avatar'/>
                </div>
                <div className={ classes.name }>
                    { props.name }
                </div>
            </div>
            <div className={ classes.messageBlock }>
                { props.message }
            </div>
        </div>

    )
}

export default MessageItem;