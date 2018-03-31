import * as React from 'react';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = (theme) => ({
    menu: {
        display: 'flex',
        alignItems: 'flex-end',
        '& a': {
            color: '#444',
            fontFamily: 'raleway',
            fontWeight: 300,
            textDecoration: 'none',
            textTransform: 'uppercase',
            verticalAlign: 'baseline',
            marginLeft: 5,
            marginRight: 5,
            '&:hover,&.active': {
                color: '#222',
                fontWeight: 500
            }
        }
    },
   
});

const Menu = ({classes, sheet, theme, children, ...otherProps}) => (
    <nav className={classes.menu} {...otherProps}>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/order">Purchase</NavLink>
    </nav>
)

const StyledMenu = injectSheet(styles)(Menu);

export default StyledMenu;
