import * as React from 'react';
import ShowOnMouseMove from '../components/showOnMouseMove';
import GalleryContainer from '../containers/gallery';

export default class GalleryPage extends React.Component { 
    render() {
        return (
            <GalleryContainer key="gallery" index={this.props.match.params.index ? this.props.match.params.index : 0} style={{zIndex: 1, position: 'relative'}} />
        )
    }
}