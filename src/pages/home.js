import * as React from 'react';
import CenterChildren from '../components/centerChildren';
import Header from '../components/header';

const Home = () => ([
    <Header key="header"/>,
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