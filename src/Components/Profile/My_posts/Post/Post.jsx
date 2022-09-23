import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
                <div className={ classes.item }>
                    <img src='https://klike.net/uploads/posts/2019-03/1551511845_24.jpg' alt='avatar'/>
                    { props.message }
                    <div>
                        <span>likes</span>
                        { props.likesCount }
                    </div>
                </div>
    )
}
export default Post;