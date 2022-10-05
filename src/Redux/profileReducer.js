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
    let stateCopy = { ...state }
    switch ( action.type ) {
        case ADD_POST:
            let newPost = {
                id: stateCopy.posts.length,
                message: state.newPostTextIn,
                likesCount: 6,
            };
            stateCopy.posts = [ ...state.posts ];
            stateCopy.posts.push( newPost );
            stateCopy.newPostTextIn = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostTextIn = action.newText;
            return stateCopy;

        default:
            return state;
    }

}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = ( text ) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
