import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = ( state ) => {
    return {
        posts: state.profilePage.posts,
        newPostTextIn: state.profilePage.newPostTextIn,
    }
}

let mapDispatchToProps = ( dispatch ) => {
    return {
        addPost: () => {
            dispatch( addPostCreator() );
        },
        updateNewPostText: ( text ) => {
            dispatch( updateNewPostTextCreator( text ) )

        },
    }
}

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );
export default MyPostsContainer;
