import React from 'react';
import CenterChildren from '../components/centerChildren';
import Button from '../components/button';
import Header from '../components/header';

const OrderBook = ({history}) => (
    <div>
    <Header style={{ position: 'relative', zIndex: 10}} />
    <CenterChildren style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        textAlign: 'justify',
        fontSize: 14,
        zIndex: 1,
        letterSpacing: 0.5}}>
        <div style={{maxWidth: 400, margin: 40}}>
            <p>
                The collection is available as a hardback photobook for £24.99 plus postage. To order please click the button below
            </p>
            <Button onClick={(e) => { 
                e.stopPropagation();
                window.location = 'https://www.peecho.com/print/en/383826';
                }}>Order Book</Button>
        </div>
        
    </CenterChildren>
    
    </div>
);

export default OrderBook;