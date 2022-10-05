const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: 'Hi, how are you?', likesCount: 5 },
        { id: 1, message: "What's up?", likesCount: 6 },
        { id: 2, message: 'Hi, how are you?', likesCount: 13 },
        { id: 3, message: "It's my first post", likesCount: 12 },
    ],
    newPostTextIn: '',
};

const profileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                message: state.newPostTextIn,
                likesCount: 6,
            };
            return {
           ...state,
               posts: [ ...state.posts, newPost ],
               newPostTextIn: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostTextIn : action.newText
            };
        default:
            return state;
    }

}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = ( text ) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
