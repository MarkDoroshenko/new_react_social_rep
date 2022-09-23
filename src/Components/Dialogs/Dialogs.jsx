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
    let dialogsData = [
        { id: 1, name: 'Alex?' },
        { id: 2, name: "Igor?" },
        { id: 3, name: 'Joseph' },
        { id: 4, name: "Kiril" },
        { id: 5, name: 'Natali' },
        { id: 6, name: "Kate" },
    ]
    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: "What's up?" },
        { id: 3, message: 'Not bad, thanks.' },
        { id: 4, message: "Hi!" },
        { id: 5, message: "What's up?" },
        { id: 6, message: "Not bad, thanks." },
    ]

    return (
        <Wrapper className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                <DialogItem id={ dialogsData[0].id } name={ dialogsData[0].name }/>
                <DialogItem id={ dialogsData[1].id } name={ dialogsData[1].name }/>
                <DialogItem id={ dialogsData[2].id } name={ dialogsData[2].name }/>
                <DialogItem id={ dialogsData[3].id } name={ dialogsData[3].name }/>
                <DialogItem id={ dialogsData[4].id } name={ dialogsData[4].name }/>
                <DialogItem id={ dialogsData[5].id } name={ dialogsData[5].name }/>
            </div>
            <div className={ classes.messages }>
                <Message message={ messagesData[0].message }/>
                <Message message={ messagesData[1].message }/>
                <Message message={ messagesData[2].message }/>
                <Message message={ messagesData[3].message }/>
                <Message message={ messagesData[4].message }/>
                <Message message={ messagesData[5].message }/>
            </div>
        </Wrapper>
    )
}

export default Dialogs;