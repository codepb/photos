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
        letterSpacing: 0.5}}>
        <div style={{maxWidth: 800, margin: 40}}>
            <p>
                Photography is an interesting artform. You are limited by what is infront of you.
                You can't decide to exclude a part of the scene, or move the elements for a better
                composition. Your canvas is the landscape, and your position in it. This to me is the
                beauty of photography. It is this limitation that requires exploration, patience, and timing.
            </p>
            <p>
                This collection of work has been taken over a number of years, in a number of locations.
                Some come from 10 years ago, from my time in Kent and Sussex, often a well maintained landscape.
                Others from around my new home in Durham, where the landscapes are more wild and dramatic. Finally
                some come from my visits to the Lake District, an outstanding mix of beauty, scale, and wildness.
            </p>
            <p>
                This set is a representation of serenity through the landscape, in many different forms. Each
                image brings back to me the feeling of peace and calm I had at each of those moments. The gentle
                roll of the waves at sunset, the natural wildness off the beaten track, or the amazing power and
                force of nature through a crashing waterfall.
            </p>
            <p>
                This collection is designed to be viewed as presented. I recommend making your browser fullscreen
                for the best experience. Each piece is available for purchase, and this option will shortly be
                coming to the website. Feel free to contact me in the meantime.
            </p>
            <p>
                Please click anywhere to continue to the collection.
            </p>
        </div>
    </CenterChildren>
);

export default Introduction;