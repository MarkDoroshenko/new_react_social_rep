import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './My_posts/MyPosts';
import Wrapper from '../ContentWrapper/ContentWrapper';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ( props ) => {

    return (
        <Wrapper className={ classes.content }>
            <ProfileInfo/>
            <MyPosts posts={ props.profilePage.posts }
                     newPostTextIn={ props.profilePage.newPostTextIn }
                     dispatch={ props.dispatch }

            />
        </Wrapper>
    )
}
export default Profile;