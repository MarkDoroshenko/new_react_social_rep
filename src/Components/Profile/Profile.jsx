import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './My_posts/MyPosts';
import Wrapper from '../ContentWrapper/ContentWrapper';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return (
        <Wrapper className={ classes.content }>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </Wrapper>
    )
}
export default Profile;