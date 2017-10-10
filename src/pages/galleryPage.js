import * as React from 'react';
import ShowOnHover from '../components/showOnHover';
import Header from '../components/header';
import GalleryContainer from '../containers/gallery';

export default class GalleryPage extends React.Component { 
    render() {
        return (
            [
            <GalleryContainer key="gallery" index={this.props.match.params.index ? this.props.match.params.index : 0} style={{zIndex: 1, position: 'relative'}} />,
            <ShowOnHover key="header" style={{zIndex: 1}} showInitially={true} style={{position: 'relative', zIndex: 2}}>
                <Header/>
            </ShowOnHover>
            ]
        )
    }
}