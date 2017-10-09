import * as React from 'react';
import Gallery from 'react-photo-gallery';

const PhotoSet = [
    {src: '/photos/IMG_0029.jpg', width: 5544, height: 3696},
    {src: '/photos/Gibsons Cave-1.jpg', width: 6288, height: 4197},
    {src: '/photos/IMG_0042.jpg', width: 1809, height: 2171},
    {src:'/photos/Bassenthwaite (1 of 2).jpg', width: 7360, height: 3969},
    {src: '/photos/Bassenthwaite (2 of 2).jpg', width: 7360, height: 4912},
    {src: '/photos/Bassenthwaite-3.jpg', width: 7360, height: 3828},
    {src: '/photos/Bridge-1.jpg', width: 4912, height: 7360}
];

export default class Sample extends React.Component {
    navigateToGallery = (ev, image) => {
        this.props.history.push(`/galleryPage/${image.index}`)
    }

    render() {
        return (
            <Gallery photos={PhotoSet} onClick={this.navigateToGallery}/>
        );
    }
}