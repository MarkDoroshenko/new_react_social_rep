import React from 'react';
import classes from './ContentWrapper.module.css';

const Wrapper = ({className='', children}) => {
    return(
        <div className={`${className} ${classes.appContentWrapper}`} style={{ backgroundImage: `url('')`}}>
            {children}
        </div>
    )
}

export default Wrapper;

