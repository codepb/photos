import * as React from 'react';

const Caption = (props) => {
    const { children, style, ...otherProps } = props;
    const captionStyle = {
        textAlign: 'left',
        ...style
    }
    return (<div style={captionStyle} {...otherProps}>{children}</div>)
}

export const CaptionTitle = (props) => {
    const { children, style, ...otherProps } = props;
    const titleStyle = {
        margin: 0,
        ...style
    }
    return (<h4 style={titleStyle} {...otherProps}>{children}</h4>)
}

export const CaptionBody = (props) => {
    const { children, style, ...otherProps } = props;
    const bodyStyle = {
        fontSize: 11,
        ...style
    }
    return (<div style={bodyStyle} { ...otherProps }>{ children }</div>)
}

export default Caption;