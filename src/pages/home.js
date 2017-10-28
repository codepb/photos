import * as React from 'react';
import CenterChildren from '../components/centerChildren';

const Home = ({ history }) => (
    <CenterChildren key="image" onClick={() => history.push('/gallery/0')} style={{
        width: '100vw',
        height: '100vh',
        background: '#54B298',
        cursor: 'pointer'}}>
        <div>
        <h1 style={{color: '#eee', marginBottom: 2, fontFamily: 'raleway', textAlign: 'center', fontWeight: 300, fontSize: 36, textTransform: 'uppercase', letterSpacing: 2}}>Serenity</h1>
        <h2 style={{color: '#eee', marginTop: 2, fontFamily: 'raleway', textAlign: 'center', fontWeight: 300, fontSize: 21.5, textTransform: 'uppercase', letterSpacing: 2}}>Paul Burgess</h2>
        </div>
    </CenterChildren>
)

export default Home;