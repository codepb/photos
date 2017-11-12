import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import CenterChildren from './centerChildren';
import Caption, { CaptionTitle, CaptionBody } from './caption';

const pageStyles = {
    gallery: {
        opacity: 0,
        margin: '3vh 7vw 3vh 5vw',
        width: '88vw',
        height: '94vh',
        visibility: 'hidden',
        background: '#fff'
    },
    shown: {
        transition: '2s',
        opacity: 1,
        visibility: 'visible'
    },
    figure: {
        maxHeight: '100%',
        maxWidth: '100%',
        margin: 0
    },
    image: {
        maxWidth: '100%',
        maxHeight: 'calc(90vh -200)'
    }, 
    caption: {
        height: 200,
        width: '100%',
        paddingLeft: 15,
        paddingTop: 40,
        textAlign: 'left',
        boxSizing: 'border-box'
    },
    '@media screen and (orientation: landscape)': {
        image: {
            float: 'left',
            maxWidth: 'calc(100% - 200px)',
            maxHeight: '90vh'
        }, 
        caption: {
            float:'left',
            width: 200,
            paddingLeft: 40,
            paddingTop: 15,
            textAlign: 'left',
            boxSizing: 'border-box'
        }
    }
}

class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.updateSize();
        window.addEventListener('resize', this.updateSize);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
      }
      

    updateSize = () => {
        const isLandscape = window.innerWidth >= window.innerHeight;
        const componentWidth = isLandscape ? (window.innerWidth * 0.88) - 200 : window.innerWidth * 0.88;
        const componentHeight = isLandscape ? (window.innerHeight * 0.94) * 0.9 : ((window.innerHeight * 0.94) * 0.9) - 200;
        const ratio = componentWidth / componentHeight;
        const imageRatio = this.props.image.width / this.props.image.height;
        const width = imageRatio > ratio ? componentWidth : componentHeight * imageRatio;
        const height = imageRatio > ratio ? componentWidth / imageRatio : componentHeight;
        this.setState({ width: width, height: height });
    }
    
    render()  {
        const {show, classes, children, image, ...props} = this.props;
    
        return (
            <CenterChildren key="image" className={typeof(show) === 'undefined' || show ? classNames(classes.gallery, classes.shown) : classes.gallery} onClick={props.onClick} {...props} >
                <figure className={classes.figure}>
                    <img src={image.src} alt={image.caption.title} srcSet={image.srcSet} className={classes.image} width={this.state.width} height={this.state.height} />
                    <Caption className={classes.caption}>
                        <CaptionTitle style={{marginBottom: 5}}>{image.caption.title}</CaptionTitle>
                        <CaptionBody>{image.caption.content}</CaptionBody>
                    </Caption>
                </figure>
            </CenterChildren>);
    }
};

export default injectSheet(pageStyles)(GalleryPage);