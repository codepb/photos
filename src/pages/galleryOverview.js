import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Header from '../components/header';
import CenterChildren from '../components/centerChildren';
import Photos from '../photos';

export default class Sample extends React.Component {
    navigateToGallery = (ev, image) => {
        this.props.history.push(`/gallery/${image.index}`)
    }

    render() {
        return [
            <Header key="header"/>,
            <CenterChildren key="gallery" style={{width: 'calc(100vw - 80px)', position: 'relative', marginLeft: 40, marginBottom: 30}}>
                <Gallery photos={Photos} onClick={this.navigateToGallery}/>
            </CenterChildren>
        ];
    }
}