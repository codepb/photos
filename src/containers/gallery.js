import * as React from 'react';
import Gallery from '../components/gallery';

const images = [
    {src:'/photos/Bassenthwaite (1 of 2).jpg', caption: {title: 'Bassenthwaite', content: 'Trees lined up against the shore.'}},
    {src: '/photos/Bassenthwaite (2 of 2).jpg', caption: {title: 'Bassenthwaite and Hills', content: 'Rocks with hills behind.'}},
    {src: '/photos/Bassenthwaite-3.jpg', caption: {title: 'Bassenthwaite hills', content: 'Low clouds on the hills.'}},
    {src: '/photos/Bridge-1.jpg', caption: {title: 'Framwellgate Bridge', content: 'Underside of Framwellgate Bridge.'}},
    {src: '/photos/Gibsons Cave-1.jpg', caption: {title: 'Gibson\'s Cave', content: 'Waterfall at Gibson\'s Cave.'}},
]

export default class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        }
    }

    nextImage = () => {
        this.setState((state) => {return {currentImageIndex: (state.currentImageIndex + 1) % images.length}})
    }

    render() {
        return (<Gallery image={images[this.state.currentImageIndex]} onClick={this.nextImage}/>)
    }
}