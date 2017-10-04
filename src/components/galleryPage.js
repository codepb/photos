import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import CenterChildren from './centerChildren';
import Caption, { CaptionTitle, CaptionBody } from './caption';
import Button from './button';

const pageStyles = {
    gallery: {
        transition: '2s',
        opacity: 0,
        margin: '3vh 7vw 3vh 5vw',
        width: '88vw',
        height: '94vh',
        visibility: 'hidden'
    },
    shown: {
        transition: '2s',
        opacity: 1,
        visibility: 'visible'
    },
    image: {
        float: 'left',
        maxWidth: '85%',
        maxHeight: '90vh'
    },
    figure: {
        maxHeight: '100%',
        maxWidth: '100%'
    },
    caption: {
        float:'left',
        width: '15%',
        paddingLeft: 40,
        paddingTop: 15,
        textAlign: 'left',
        boxSizing: 'border-box'
    }
}

const GalleryPage = injectSheet(pageStyles)(({show, classes, children, image, ...props}) => {
    return (
         <CenterChildren key="image" className={typeof(show) === 'undefined' || show ? classNames(classes.gallery, classes.shown) : classes.gallery} onClick={props.onClick} {...props} >
             <figure className={classes.figure}>
                <img src={image.src} alt={image.caption.title} className={classes.image}/>
                <Caption className={classes.caption}>
                    <CaptionTitle style={{marginBottom: 5}}>{image.caption.title}</CaptionTitle>
                    <CaptionBody>{image.caption.content}</CaptionBody>
                    <Button style={{marginTop: 30}}>Purchase</Button>
                </Caption>
            </figure>
         </CenterChildren>);
});

export default GalleryPage;