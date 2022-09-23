import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = ( props ) => {
    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 5 },
        { id: 2, message: "What's up?", likesCount: 6 },
        { id: 3, message: 'Hi, how are you?', likesCount: 13 },
        { id: 4, message: "It's my first post", likesCount: 12 },
        { id: 5, message: 'Hi, how are you?', likesCount: 16 },
        { id: 6, message: "What's up?", likesCount: 9 },
        { id: 7, message: "What's up?", likesCount: 3 },
    ]

    let postsElements = posts.map( post => <Post message={ post.message } likesCount={ post.likesCount }/> )

    return (
        <div className={ classes.postsBlock }>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={ classes.posts }>
                { postsElements }
            </div>
        </div>
    )
}
export default MyPosts;