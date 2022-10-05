import React from 'react';
import { addMessageCreator, onMessageChangeCreator } from '../../Redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = ( state ) => {
    return {
        messagesPage: state.messagesPage
        // messages: state.messagesPage.messages,
        // dialogs: state.messagesPage.dialogs,
    }
}
let mapDispatchToProps = ( dispatch ) => {
    return {
        sendMessage: () => {
            dispatch( addMessageCreator() );
        },
        updateMessageText: (text) => {
            dispatch( onMessageChangeCreator( text ) )
        },
    }
}

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );

export default DialogsContainer;