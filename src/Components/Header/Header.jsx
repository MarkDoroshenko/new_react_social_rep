import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={ classes.header } style={{ backgroundImage: `url('https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <img className={ classes.logoImg } src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30143708/1113.png'
                 alt='logo'/>
        </header>
    )
}

export default Header;