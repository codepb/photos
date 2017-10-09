import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => (
    <nav {...props}>
        <NavLink to="/gallery">Gallery</NavLink>
    </nav>
)

export default Menu;