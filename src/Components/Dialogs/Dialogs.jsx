import React from 'react';
import classes from './Dialogs.module.css'
import Wrapper from '../ContentWrapper/ContentWrapper';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';

const Dialogs = ( props ) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem id={ dialog.id } name={ dialog.name } avatar={dialog.avatar}/> )
    let messagesElements = props.state.messages.map( message =>  <MessageItem message={ message.message } name={message.name} avatar={message.avatar}/>)

    return (
        <Wrapper className={ classes.messagesPageWrapper }>
            <div className={ classes.dialogs }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
            </div>
        </Wrapper>
    )
}

export default Dialogs;