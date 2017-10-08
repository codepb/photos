import * as React from 'react';
import CenterChildren from '../components/centerChildren';

const Home = () => ([
    <h1 key="title" style={{color: '#000', fontFamily: 'raleway', fontWeight: 300, fontSize: 34, textAlign: 'left', textTransform: 'uppercase', marginLeft: 20}}>Paul Burgess Photography</h1>,
    <CenterChildren key="image">
        <div style={{
            width: '90vw',
            height: '80vh',
            background: 'url("/photos/Gibsons Cave-1.jpg") no-repeat center center fixed',
            backgroundSize: 'cover'
            }}></div>
    </CenterChildren>]
)

export default Home;