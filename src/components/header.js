import * as React from 'react';
import Menu from './menu';

const Header = ({style}) => {
    const headerStyle = {
        ...style,
        display: 'flex',
        flexDirection: 'row'
    }
    return (<header key="title" style={headerStyle}>
        <div style={{flex: 1}} />
        <Menu style={{marginRight: 40, marginTop:16, marginBottom: 16}}/>
    </header>)};

export default Header;