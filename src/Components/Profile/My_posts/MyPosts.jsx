import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/State';

const MyPosts = ( props ) => {
    let postsElements = props.posts.map( post => <Post message={ post.message } likesCount={ post.likesCount }/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextCreator( text ) )
    }

    return (
        <div className={ classes.postsBlock }>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange }
                              ref={ newPostElement }
                              value={ props.newPostTextIn }>
                    </textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>

            </div>
            <div className={ classes.posts }>
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;