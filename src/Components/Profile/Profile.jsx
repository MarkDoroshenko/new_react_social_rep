import React from 'react';
import classes from './Profile.module.css'
import Wrapper from '../ContentWrapper/ContentWrapper';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My_posts/MyPostsContainer';


const Profile = ( props ) => {
    return (
        <Wrapper className={ classes.content }>
            <ProfileInfo/>
            <MyPostsContainer />
        </Wrapper>
    )
}
export default Profile;