import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { getClassName } from './utils';

const NavBar = (props) => {
    return (
        <nav className={ classes.nav }
             style={ { backgroundImage: `url('https://images.pexels.com/photos/2225648/pexels-photo-2225648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` } }>
            <div className={ classes.navItem }>
                <NavLink to='/profile' className={ getClassName }>Profile</NavLink>
            </div>
            <div className={ classes.navItem }>
                <NavLink to='/dialogs'
                         className={ getClassName }>Messages</NavLink>
            </div>
            <div className={ classes.navItem }>
                <NavLink to='/users'
                         className={ getClassName }>Users</NavLink>
            </div>
            <div className={ classes.navItem }>
                <NavLink to='/news'
                         className={ getClassName }>News</NavLink>
            </div>
            <div className={ classes.navItem }>
                <NavLink to='/music'
                         className={ getClassName }>Music</NavLink>
            </div>
            <div className={ classes.navItem }>
                <NavLink to='/settings'
                         className={ getClassName }>Settings</NavLink>
            </div>
            <div className={ classes.navItem }>
                <NavLink to='/friends' className={ getClassName }>
                    My friends
                </NavLink>
            </div>
        </nav>
    )
}


export default NavBar;