import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import CenterChildren from './centerChildren';
import Caption, { CaptionTitle, CaptionBody } from './caption';

const pageStyles = {
    gallery: {
        transition: '2s',
        opacity: 0,
        margin: '5vh 5vw',
        width: '90vw',
        height: '90vh',
        visibility: 'hidden'
    },
    shown: {
        transition: '2s',
        opacity: 1,
        visibility: 'visible'
    }
}

const GalleryPage = injectSheet(pageStyles)(({show, classes, children, image, ...props}) => {
    return (
         <CenterChildren key="image" className={typeof(show) === 'undefined' || show ? classNames(classes.gallery, classes.shown) : classes.gallery} onClick={props.onClick} {...props} >
             <img src={image.src} alt={image.caption.title} style={{float: 'left', maxWidth: '85%', maxHeight: '100%'}}/>
             <div key="caption" style={{
                float:'left',
                width: '15%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Caption style={{margin: 15}}>
                    <CaptionTitle>{image.caption.title}</CaptionTitle>
                    <CaptionBody>{image.caption.content}</CaptionBody>
                </Caption>
            </div>
         </CenterChildren>);
});

export default GalleryPage;