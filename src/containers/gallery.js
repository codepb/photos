import * as React from 'react';
import Gallery from '../components/gallery';

const images = [
    {src:'/photos/Bassenthwaite (1 of 2).jpg', caption: {title: 'Bassenthwaite', content: 'Trees lined up against the shore.'}},
    {src: '/photos/Bassenthwaite (2 of 2).jpg', caption: {title: 'Bassenthwaite and Hills', content: 'Rocks with hills behind.'}}
]

export default class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        }
    }

    nextImage = () => {
        this.setState((state) => {return {currentImageIndex: (state.currentImageIndex + 1) % 2}})
    }

    render() {
        return (<Gallery image={images[this.state.currentImageIndex]} onClick={this.nextImage}/>)
    }
}