import * as React from 'react';
import Image from './image';
import Caption, { CaptionTitle, CaptionBody } from './caption';

const Gallery = (props) => {
    return <div style={{width:'100vw', height: '100vh'}} onClick={props.onClick}>
         <Image key="image" maxHeight="100%" maxWidth="85%" margin="60px" style={{float: 'left'}} src={props.image.src}/>
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
    </div>
}

export default Gallery;