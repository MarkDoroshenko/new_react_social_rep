import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
                <div className='{ classes.item }'>
                    <img className='avatarImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUfbUNJrtXWHm5PrsKkvgbSm2XaRgX4tVhg&usqp=CAU' alt='avatar'/>
                    { props.message }
                    <div>
                        <span>likes: </span>
                        { props.likesCount }
                    </div>
                </div>
    )
}
export default Post;