import * as React from 'react';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = (theme) => ({
    menu: {
        display: 'flex',
        alignItems: 'flex-end',
        '& a': {
            color: '#333',
            fontFamily: 'raleway',
            fontWeight: 300,
            textDecoration: 'none',
            textTransform: 'uppercase',
            verticalAlign: 'baseline',
            '&:hover': {
                color: '#000',
                fontWeight: 500
            }
        }
    }
});

const Menu = ({classes, children, ...otherProps}) => (
    <nav className={classes.menu} {...otherProps}>
        <NavLink to="/gallery" >Gallery</NavLink>
    </nav>
)

const StyledMenu = injectSheet(styles)(Menu);

export default StyledMenu;