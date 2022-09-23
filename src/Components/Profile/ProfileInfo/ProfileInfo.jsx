import React from 'react';
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={ classes.contentImg }
                     src='https://i.7fon.org/1000/k158420832.jpg'
                     alt='img'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={ classes.profileImg }
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUfbUNJrtXWHm5PrsKkvgbSm2XaRgX4tVhg&usqp=CAU'
                     alt='img'/>
                discription+++
            </div>
        </div>
    )
}
export default ProfileInfo;