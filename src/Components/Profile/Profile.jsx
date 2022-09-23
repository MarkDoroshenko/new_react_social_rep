import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './My_posts/MyPosts';
import Wrapper from '../ContentWrapper/ContentWrapper';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <Wrapper className={ classes.content }>
            <ProfileInfo/>
            <MyPosts/>
        </Wrapper>
    )
}
export default Profile;