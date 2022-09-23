import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let postData = [
        {id:1, message: 'Hi, how are you?', likesCount: 5},
        {id:2, message: "What's up?", likesCount: 6},
        {id:3, message: 'Hi, how are you?', likesCount: 13},
        {id:4, message: "It's my first post", likesCount: 12},
        {id:5, message: 'Hi, how are you?', likesCount: 16},
        {id:6, message: "What's up?", likesCount: 9},
        {id:7, message: "What's up?", likesCount: 3},
    ]
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
                <Post message={ postData[0].message } likesCount={ postData[0].likesCount }/>
                <Post message={ postData[1].message } likesCount={ postData[1].likesCount }/>
                <Post message={ postData[2].message } likesCount={ postData[2].likesCount }/>
                <Post message={ postData[3].message } likesCount={ postData[3].likesCount }/>
                <Post message={ postData[4].message } likesCount={ postData[4].likesCount }/>
                <Post message={ postData[5].message } likesCount={ postData[5].likesCount }/>
                <Post message={ postData[6].message } likesCount={ postData[6].likesCount }/>
            </div>
        </div>
    )
}
export default MyPosts;