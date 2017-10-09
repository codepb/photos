import * as React from 'react';
import CenterChildren from '../components/centerChildren';
import Menu from '../components/menu';

const Home = () => ([
    <h1 key="title" style={{color: '#000', fontFamily: 'raleway', fontWeight: 300, fontSize: 24, textAlign: 'left', textTransform: 'uppercase', marginLeft: 40, display: 'inline-block'}}>Paul Burgess Photography</h1>,
    <Menu key="menu" style={{display: 'inline-block'}}/>,
    <CenterChildren key="image" style={{width: 'calc(100vw - 80px)', height: 'calc(100vh - 92px)', position: 'relative', marginLeft: 40, marginBottom: 30}}>
        <div style={{
            width: '100%',
            height: '100%',
            background: 'url("/photos/Gibsons Cave-1.jpg") no-repeat center center fixed',
            backgroundSize: 'cover'
            }}></div>
    </CenterChildren>]
)

export default Home;