import React from 'react';
import classes from './Dialogs.module.css'
import Wrapper from '../ContentWrapper/ContentWrapper';
import { NavLink } from 'react-router-dom';

const DialogItem = ( props ) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={ classes.dialogWrapper }>
            <NavLink to={ path } className={ getClassName }>{ props.name }</NavLink>
        </div>
    )
}
const Message = ( props ) => {
    return (
        <div className={ classes.message }>
            { props.message }
        </div>
    )
}
const getClassName = ( dialogIt ) => {
    return dialogIt.isActive ? classes.active : classes.dialog
}

const Dialogs = ( props ) => {
    let dialogs = [
        { id: 1, name: 'Alex' },
        { id: 2, name: "Igor" },
        { id: 3, name: 'Joseph' },
        { id: 4, name: "Kiril" },
        { id: 5, name: 'Natali' },
        { id: 6, name: "Kate" },
    ]

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: "What's up?" },
        { id: 3, message: 'Not bad, thanks.' },
        { id: 4, message: "Hi!" },
        { id: 5, message: "What's up?" },
        { id: 6, message: "Not bad, thanks." },
    ]
    let dialogsElements = dialogs.map( dialog => <DialogItem id={ dialog.id } name={ dialog.name }/> )
    let messagesElements = messages.map( message =>  <Message message={ message.message }/>)

    return (
        <Wrapper className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
            </div>
        </Wrapper>
    )
}

export default Dialogs;