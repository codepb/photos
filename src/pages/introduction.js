import * as React from 'react';
import CenterChildren from '../components/centerChildren';

const Introduction = ({history}) => (
    <CenterChildren onClick={() => history.push('/gallery/0')} style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        textAlign: 'justify',
        cursor: 'pointer',
        fontSize: 14,
        letterSpacing: 0.5}}>
        <div style={{maxWidth: 800, margin: 40}}>
            <p>
                Photography is a restrictive art. You are limited by what is in front of you.
                You can't decide to exclude a part of the scene, or move the elements for a better
                composition. Your canvas is the landscape, and your position in it dictates how the canvas is 
                constructed. This to me is the beauty of photography. It is this limitation that requires
                exploration, patience, and timing.
            </p>
            <p>
                This collection of work has been taken over a number of years, in a number of locations.
                Some come from 10 years ago, from my time in Kent and Sussex where I grew up, often a well maintained
                landscape. Others from around my new home in Durham, where the landscapes are more wild and dramatic.
            </p>
            <p>
                This set is a representation of serenity through the landscape, in many different forms. Each
                image brings back to me the feeling of peace and calm I had at each of those moments. The gentle
                roll of the waves at sunset, the natural wildness off the beaten track, or the amazing power and
                force of nature through a crashing waterfall.
            </p>
            <p>
                This collection is designed to be viewed as presented. I recommend making your browser fullscreen
                for the best experience (F11). The entire collection is available to purchase as a hardback book. Please
                follow the purchase link in the menu on the next page to order.
            </p>
            <p>
                Please click anywhere to continue to the collection.
            </p>
        </div>
    </CenterChildren>
);

export default Introduction;