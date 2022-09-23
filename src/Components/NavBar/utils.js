import classes from './NavBar.module.css';

export const getClassName = navData => navData.isActive ? classes.active : classes.item

// const getClassName = ( navData ) => {
//     return navData.isActive ? classes.active : classes.item
// }