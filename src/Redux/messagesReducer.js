const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const messagesReducer = (state, action) => {
    switch ( action.type ){
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageTextIn,
                name: 'You',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUfbUNJrtXWHm5PrsKkvgbSm2XaRgX4tVhg&usqp=CAU',
            };
            state.messages.push( newMessage );
            state.newMessageTextIn = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageTextIn = action.newText;
            return state;

        default:
            return state;
    }

}

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const onMessageChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;

