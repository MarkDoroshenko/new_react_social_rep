const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = ( state, action ) => {

    switch ( action.type ) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostTextIn,
                likesCount: 6,
            };
            state.posts.push( newPost );
            state.newPostTextIn = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostTextIn = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = ( text ) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
