import * as React from 'react';

const CenterChildren = ({style, children, horizontal, vertical, ...otherProps }) => {
    const frameStyle={
        ...style,
        display: 'flex'
    }
    frameStyle.justifyContent = (typeof(horizontal) === 'undefined' || horizontal) ? 'center' : 'flex-start';
    frameStyle.alignItems = (typeof(vertical) === 'undefined' || vertical) ? 'center' : 'flex-start';
    return (
        <div style={frameStyle} {...otherProps}>
            {children}
        </div>);
}

export default CenterChildren;