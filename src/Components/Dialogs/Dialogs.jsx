import React from 'react';
import classes from './Dialogs.module.css'
import Wrapper from '../ContentWrapper/ContentWrapper';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';

const Dialogs = ( props ) => {

    let state = props.messagesPage
    let dialogsElements =
        state.dialogs.map( dialog =>
            <DialogItem key={ dialog.id } id={ dialog.id } name={ dialog.name } avatar={ dialog.avatar }/> );
    let messagesElements =
        state.messages.map( message =>
            <MessageItem key={ message.id } message={ message.message } name={ message.name }
                         avatar={ message.avatar }/> );

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = ( e ) => {
        let text = e.target.value;
        props.updateMessageText( text )
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
                                  onChange={ onMessageChange }
                                  value={ state.newMessageTextIn }>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessage }>Send</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dialogs;