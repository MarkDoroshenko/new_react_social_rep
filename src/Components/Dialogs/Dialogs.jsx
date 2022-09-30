import React from 'react';
import classes from './Dialogs.module.css'
import Wrapper from '../ContentWrapper/ContentWrapper';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import { addMessageCreator, onMessageChangeCreator } from '../../Redux/messagesReducer';

const Dialogs = ( props ) => {

    let dialogsElements =
        props.state.dialogs.map( dialog =>
            <DialogItem id={ dialog.id } name={ dialog.name } avatar={ dialog.avatar }/> );
    let messagesElements =
        props.state.messages.map( message =>
            <MessageItem message={ message.message } name={ message.name } avatar={ message.avatar }/> );

    let newMessageBody = props.state.newMessageTextIn

    let onSendMessageClick = () => {
        props.dispatch( addMessageCreator() );
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch( onMessageChangeCreator( text ) )
    }

    return (
        <Wrapper className={ classes.messagesPageWrapper }>
            <div className={ classes.dialogs }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
                <div className={ classes.textAreaBlock }>
                    <div>
                        <textarea placeholder='Enter your message'
                                  className={ classes.textArea }
                                  onChange={ onNewMessageChange }
                                  value={ newMessageBody }>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dialogs;