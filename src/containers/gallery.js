import * as React from 'react';
import GalleryPage from '../components/galleryPage';

const images = [
    {src: '/photos/IMG_0029.jpg', caption: {title: 'Tranquility', content: 'The sea reflects the meaning of tranquility. Nothing quite matches the sound of the sea as the sun sets.'}},
    {src: '/photos/Gibsons Cave-1.jpg', caption: {title: 'Gibson\'s Cave', content: 'Waterfall at Gibson\'s Cave.'}},
    {src: '/photos/IMG_0042.jpg', caption: {title: 'Ghostly Pillars', content: 'Water hides so much, but some things break through.'}},
    {src:'/photos/Bassenthwaite (1 of 2).jpg', caption: {title: 'Bassenthwaite', content: 'Trees lined up against the shore.'}},
    {src: '/photos/Bassenthwaite (2 of 2).jpg', caption: {title: 'Bassenthwaite and Hills', content: 'Rocks with hills behind.'}},
    {src: '/photos/Bassenthwaite-3.jpg', caption: {title: 'Bassenthwaite hills', content: 'Low clouds on the hills.'}},
    {src: '/photos/Bridge-1.jpg', caption: {title: 'Framwellgate Bridge', content: 'Underside of Framwellgate Bridge.'}},
   
]

function preloadImage(src) {
    const image = new Image();
    image.src = src;
}

export default class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            previousImageIndex: images.length - 1,
            nextImageIndex: 1
        }
    }

    componentDidMount() {
        if(images.length > 1) {
            preloadImage(images[1].src);
        }
        if(images.length > 2) {
            preloadImage(images[images.length -1].src);
        }
    }

    nextImage = () => {
        this.setState((state) => {return {
            currentImageIndex: (state.currentImageIndex + 1) % images.length, 
            previousImageIndex: state.currentImageIndex,
            nextImageIndex: (state.currentImageIndex + 2) % images.length}},
                    () => { preloadImage(images[this.state.currentImageIndex + 1 % images.length])});
    }

    render() {
        return (
            [<GalleryPage key={images[this.state.previousImageIndex].src} show={false} image={images[this.state.previousImageIndex]} onClick={this.nextImage} style={{position: 'absolute', top: 0, left: 0}}/>,
            <GalleryPage key={images[this.state.currentImageIndex].src} image={images[this.state.currentImageIndex]} onClick={this.nextImage} style={{position: 'absolute', top: 0, left: 0}}/>,
            <GalleryPage key={images[this.state.nextImageIndex].src} show={false} image={images[this.state.nextImageIndex]} onClick={this.nextImage} style={{position: 'absolute', top: 0, left: 0}}/>])
    }
}