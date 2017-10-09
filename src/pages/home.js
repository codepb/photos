import * as React from 'react';
import CenterChildren from '../components/centerChildren';

const Home = () => ([
    <h1 key="title" style={{color: '#000', fontFamily: 'raleway', fontWeight: 300, fontSize: 24, textAlign: 'left', textTransform: 'uppercase', marginLeft: 40}}>Paul Burgess Photography</h1>,
    <nav key="menu"></nav>,
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