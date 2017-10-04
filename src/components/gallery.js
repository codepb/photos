import * as React from 'react';
import CenterChildren from './centerChildren';
import Caption, { CaptionTitle, CaptionBody } from './caption';

const Gallery = (props) => {
    return (
         <CenterChildren key="image" onClick={props.onClick} style={{
             margin: 30,
             width: 'calc(100vw - 60px)',
             height: 'calc(100vh - 60px)'}} >
             <img src={props.image.src} alt={props.image.caption.title} style={{float: 'left', maxWidth: '85%', maxHeight: '100%'}}/>
             <div key="caption" style={{
                float:'left',
                width: '15%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Caption>
                    <CaptionTitle>{props.image.caption.title}</CaptionTitle>
                    <CaptionBody>{props.image.caption.content}</CaptionBody>
                </Caption>
            </div>
         </CenterChildren>);
}

export default Gallery;