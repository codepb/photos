import * as React from 'react';
import Menu from './menu';

const Header = () => (<header key="title" style={{display: 'flex', flexDirection: 'row'}}>
        <h1 style={{color: '#000', fontFamily: 'raleway', fontWeight: 300, fontSize: 24, textAlign: 'left', textTransform: 'uppercase', marginLeft: 40, marginTop:16, marginBottom: 16, display: 'inline-block'}}>Paul Burgess Photography</h1>
        <div style={{flex: 1}} />
        <Menu style={{marginRight: 40, marginTop:16, marginBottom: 16}}/>
    </header>);

export default Header;