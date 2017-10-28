import * as React from 'react';
import Swiper from '../components/swiper';
import GalleryPage from '../components/galleryPage';
import ShowOnMouseMove from '../components/showOnMouseMove';
import CenterChildren from '../components/centerChildren';
import Header from '../components/header';
import Photos from '../photos';

function preloadImage(src) {
    const image = new Image();
    image.src = src;
}

var key = {
    LEFT:   37,
    UP:     38,
    RIGHT:  39,
    DOWN:   40
  };

export default class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        const currentIndex = props.index ? props.index * 1 : 0
        this.state = {
            currentImageIndex: currentIndex,
            previousImageIndex: currentIndex === 0 ? Photos.length - 1 : currentIndex - 1,
            nextImageIndex: (currentIndex + 1) % Photos.length,
            lastImageIndex: currentIndex === 0 ? Photos.length - 1 : currentIndex - 1
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
            nextImageIndex: state.currentImageIndex,
            lastImageIndex: state.currentImageIndex}});
    }

    nextImage = () => {
        this.setState((state) => {return {
            currentImageIndex: (state.currentImageIndex + 1) % Photos.length, 
            previousImageIndex: state.currentImageIndex,
            nextImageIndex: (state.currentImageIndex + 2) % Photos.length,
            lastImageIndex: state.currentImageIndex}},
                    () => { preloadImage(Photos[this.state.currentImageIndex + 1 % Photos.length])});
    }
    handleKeyPress = (e) => {
        console.log(e);
        if(e.keyCode === key.LEFT) {
            this.previousImage();
        } else if(e.keyCode === key.RIGHT) {
            this.nextImage();
        }
    }

    render() {
        return (
            <div tabIndex="1" onKeyDown={this.handleKeyPress} style={{position: 'relative', height: '100vh'}}>
            <Swiper onSwipeLeft={this.previousImage} onSwipeRight={this.nextImage} style={{position: 'relative', height: '100vh'}}> 
                
                <GalleryPage key={`${Photos[this.state.lastImageIndex].src}-shown`} image={Photos[this.state.previousImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={`${Photos[this.state.currentImageIndex].src}-shown`} image={Photos[this.state.currentImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={Photos[this.state.previousImageIndex].src} show={false} image={Photos[this.state.previousImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <GalleryPage key={Photos[this.state.nextImageIndex].src} show={false} image={Photos[this.state.nextImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                <ShowOnMouseMove style={{position: 'absolute', left: 0, top:0, height: '100vh', width: '100vw'}} showInitially={true}>
                    
                    <CenterChildren style={{position: 'absolute', right: 0, height: '100%', width: 40}} >
                        <span style={{fontSize: 40, cursor: 'pointer'}} onClick={this.nextImage}>&gt;</span>
                    </CenterChildren>
                    <CenterChildren style={{position: 'absolute', left: 0, height: '100%', width: 40}}>
                        <span style={{fontSize: 40, cursor: 'pointer'}} onClick={this.previousImage}>&lt;</span>
                    </CenterChildren>
                    <Header style={{position: 'absolute', top:0, left: 0}} />
                </ShowOnMouseMove>
                
            </Swiper>
            </div>)
    }
}