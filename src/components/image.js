import * as React from 'react'

const Image = (props) => {
    const { src, alt, style, maxWidth, maxHeight, margin, ...otherProps } = props;
    const frameStyle={
        ...style,
        width: maxWidth,
        height: maxHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={frameStyle} {...otherProps}>
            <img src={src} alt={alt} style={{
                maxHeight: `calc(100% - ${margin})`,
                maxWidth: `calc(100% - ${margin})`
            }}/>
        </div>);
}

export default Image;