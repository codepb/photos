import * as React from 'react';
import Swiper from '../components/swiper';
import GalleryPage from '../components/galleryPage';
import ShowOnHover from '../components/showOnHover';
import CenterChildren from '../components/centerChildren';
import Photos from '../photos';

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
            previousImageIndex: currentIndex === 0 ? Photos.length - 1 : currentIndex - 1,
            nextImageIndex: (currentIndex + 1) % Photos.length
        }
    }

    componentDidMount() {
        if(Photos.length > 1) {
            preloadImage(Photos[1].src);
        }
        if(Photos.length > 2) {
            preloadImage(Photos[Photos.length -1].src);
        }
    }

    previousImage = () => {
        this.setState((state) => {return {
            currentImageIndex: (Photos.length + state.currentImageIndex - 1) % Photos.length, 
            previousImageIndex: (Photos.length + state.currentImageIndex - 2) % Photos.length,
            nextImageIndex: state.currentImageIndex}});
    }

    nextImage = () => {
        this.setState((state) => {return {
            currentImageIndex: (state.currentImageIndex + 1) % Photos.length, 
            previousImageIndex: state.currentImageIndex,
            nextImageIndex: (state.currentImageIndex + 2) % Photos.length}},
                    () => { preloadImage(Photos[this.state.currentImageIndex + 1 % Photos.length])});
    }

    render() {
        return (
            <Swiper onSwipeLeft={this.nextImage} onSwipeRight={this.previousImage} style={{position: 'relative'}}> 
                <GalleryPage key={Photos[this.state.previousImageIndex].src} show={true} image={Photos[this.state.previousImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={Photos[this.state.currentImageIndex].src} image={Photos[this.state.currentImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={Photos[this.state.nextImageIndex].src} show={false} image={Photos[this.state.nextImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
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