import * as React from 'react';
import {TransitionGroup} from 'react-transition-group';
import Swiper from '../components/swiper';
import GalleryPage from '../components/galleryPage';
import ShowOnMouseMove from '../components/showOnMouseMove';
import CenterChildren from '../components/centerChildren';
import Header from '../components/header';
import Fade from '../components/fade';
import Photos from '../photos';

function getSrc(srcSet) {
    const imageWidth = window.innerWidth;
    var sources = srcSet.map(s => {
        const split = s.split(' ');
        const src = split[0];
        const width = split[1].replace('w', '') * 1;
        return {
            src: src,
            width: width
        };
    });
    const filteredSources = sources.filter(s => s.width > imageWidth);
    const sortedSources = filteredSources.sort((a,b) => a.width - b.width);
    return sortedSources[0].src;
}

function preloadImage(srcSet) {
    const src = getSrc(srcSet);
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
        }
    }

    componentDidMount() {
        if(Photos.length > 1) {
            preloadImage(Photos[1].srcSet);
        }
        if(Photos.length > 2) {
            preloadImage(Photos[Photos.length -1].srcSet);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentImageIndex !== this.state.currentImageIndex) {
            if((prevState.currentImageIndex < this.state.currentImageIndex && this.state.currentImageIndex !== 0)
                || (this.state.currentImageIndex === 0 && prevState.currentImageIndex === Photos.length - 1))
            {
                preloadImage(Photos[(this.state.currentImageIndex + 1) % Photos.length].srcSet);
            }
            if((prevState.currentImageIndex > this.state.currentImageIndex && this.state.currentImageIndex !== Photos.length - 1)
            || (this.state.currentImageIndex === Photos.length - 1 && prevState.currentImageIndex === 0))
            {
                preloadImage(Photos[(Photos.length + this.state.currentImageIndex - 1) % Photos.length].srcSet);
            }
        }
    }

    previousImage = () => {
        this.setState((state) => ({currentImageIndex: (Photos.length + state.currentImageIndex - 1) % Photos.length}));
    }

    nextImage = () => {
        this.setState((state) => ({currentImageIndex: (state.currentImageIndex + 1) % Photos.length}));
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
                <TransitionGroup>
                <Fade key={Photos[this.state.currentImageIndex].src}>
                    <GalleryPage key={`${Photos[this.state.currentImageIndex].src}-shown`} image={Photos[this.state.currentImageIndex]} style={{position: 'absolute', top: 0, left: 0}}/>
                </Fade>
                </TransitionGroup>
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