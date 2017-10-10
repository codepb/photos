import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Header from '../components/header';
import CenterChildren from '../components/centerChildren';

const PhotoSet = [
    {src: '/photos/IMG_0029.jpg', width: 5544, height: 3696},
    {src: '/photos/Gibsons Cave-1.jpg', width: 6288, height: 4197},
    {src: '/photos/IMG_0042.jpg', width: 1809, height: 2171},
    {src:'/photos/Bassenthwaite (1 of 2).jpg', width: 7360, height: 3969},
    {src: '/photos/Bassenthwaite (2 of 2).jpg', width: 7360, height: 4912},
    {src: '/photos/Bassenthwaite-3.jpg', width: 7360, height: 3828},
    {src: '/photos/Bridge-1.jpg', width: 4912, height: 7360},
    {src: '/photos/HighForce.jpg', srcSet: [
        '/photos/HighForce-2048.jpg 2048w',
        '/photos/HighForce-1024.jpg 1024w',
        '/photos/HighForce-512.jpg 512w'
    ], width: 5807, height: 4646}
];

export default class Sample extends React.Component {
    navigateToGallery = (ev, image) => {
        this.props.history.push(`/gallery/${image.index}`)
    }

    render() {
        return [
            <Header key="header"/>,
            <CenterChildren key="gallery" style={{width: 'calc(100vw - 80px)', position: 'relative', marginLeft: 40, marginBottom: 30}}>
                <Gallery photos={PhotoSet} onClick={this.navigateToGallery}/>
            </CenterChildren>
        ];
    }
}