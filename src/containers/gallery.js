import * as React from 'react';
import Swiper from '../components/swiper';
import GalleryPage from '../components/galleryPage';
import ShowOnHover from '../components/showOnHover';
import CenterChildren from '../components/centerChildren';

const images = [
    {src: '/photos/IMG_0029.jpg', caption: {title: 'Tranquility', content: 'The sea reflects the meaning of tranquility. Nothing quite matches the sound of the sea as the sun sets.'}},
    {src: '/photos/Gibsons Cave-1.jpg', caption: {title: 'Gibson\'s Cave', content: 'Waterfall at Gibson\'s Cave.'}},
    {src: '/photos/IMG_0042.jpg', caption: {title: 'Ghostly Pillars', content: 'Water hides so much, but some things break through.'}},
    {src:'/photos/Bassenthwaite (1 of 2).jpg', caption: {title: 'Bassenthwaite', content: 'Trees lined up against the shore.'}},
    {src: '/photos/Bassenthwaite (2 of 2).jpg', caption: {title: 'Bassenthwaite and Hills', content: 'Rocks with hills behind.'}},
    {src: '/photos/Bassenthwaite-3.jpg', caption: {title: 'Bassenthwaite hills', content: 'Low clouds on the hills.'}},
    {src: '/photos/Bridge-1.jpg', caption: {title: 'Framwellgate Bridge', content: 'Underside of Framwellgate Bridge.'}},
    {src: '/photos/HighForce.jpg', srcSet: [
        '/photos/HighForce-2048.jpg 2048w',
        '/photos/HighForce-1024.jpg 1024w',
        '/photos/HighForce-512.jpg 512w'
    ],
    caption: {title: 'High Force', content: 'Afternoon at High Force.'}},
    {src: '/photos/HighForce2.jpg', srcSet: [
        '/photos/HighForce2-2048.jpg 2048w',
        '/photos/HighForce2-1024.jpg 1024w',
        '/photos/HighForce2-512.jpg 512w'
    ],
    caption: {title: 'High Force', content: 'Afternoon at High Force.'}},
    {src: '/photos/HighForceBW.jpg', srcSet: [
        '/photos/HighForceBW-2048.jpg 2048w',
        '/photos/HighForceBW-1024.jpg 1024w',
        '/photos/HighForceBW-512.jpg 512w'
    ],
    caption: {title: 'High Force', content: 'Afternoon at High Force.'}},
    {src: '/photos/TeesValley.jpg', srcSet: [
        '/photos/TeesValley-2048.jpg 2048w',
        '/photos/TeesValley-1024.jpg 1024w',
        '/photos/TeesValley-512.jpg 512w'
    ],
    caption: {title: 'Tees Valley', content: 'Evening over Tees Valley.'}}
]

function preloadImage(src) {
    const image = new Image();
    image.src = src;
}

export default class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        const currentIndex = props.index ? props.index * 1 : 0
        this.state = {
            currentImageIndex: currentIndex,
            previousImageIndex: currentIndex === 0 ? images.length - 1 : currentIndex - 1,
            nextImageIndex: (currentIndex + 1) % images.length
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

    previousImage = () => {
        this.setState((state) => {return {
            currentImageIndex: (images.length + state.currentImageIndex - 1) % images.length, 
            previousImageIndex: (images.length + state.currentImageIndex - 2) % images.length,
            nextImageIndex: state.currentImageIndex}});
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
            <Swiper onSwipeLeft={this.nextImage} onSwipeRight={this.previousImage} style={{position: 'relative'}}> 
                <GalleryPage key={images[this.state.previousImageIndex].src} show={false} image={images[this.state.previousImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={images[this.state.currentImageIndex].src} image={images[this.state.currentImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={images[this.state.nextImageIndex].src} show={false} image={images[this.state.nextImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <ShowOnHover style={{position: 'absolute', right: 0, height: '100vh', width: 40}} showInitially={true}>
                    <CenterChildren style={{height: '100%'}}>
                        <div style={{fontSize: 40, cursor: 'pointer'}} onClick={this.nextImage}>&gt;</div>
                    </CenterChildren>
                </ShowOnHover>
                <ShowOnHover style={{position: 'absolute', left: 0, height: '100vh', width: 40}} showInitially={true}>
                    <CenterChildren style={{height: '100%'}}>
                        <div style={{fontSize: 40, cursor: 'pointer'}} onClick={this.previousImage}>&lt;</div>
                    </CenterChildren>
                </ShowOnHover>
            </Swiper>)
    }
}