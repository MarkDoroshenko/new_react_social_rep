import React from 'react';
import classes from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom';


const getClassName = ( dialogIt ) => {
    return dialogIt.isActive ? classes.active : classes.dialog
}
const DialogItem = ( props ) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={ classes.dialogItemWrapper }>
            <NavLink to={ path } className={ getClassName }>
                <img className="avatarImg" src={ props.avatar } alt="avatar"/>
                { props.name }
            </NavLink>
        </div>
    )
}

export default DialogItem;