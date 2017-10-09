import * as React from 'react';
import injectSheet from 'react-jss';
const captionStyles = {
    caption: {
        textAlign: 'left'
    }
}

const Caption = injectSheet(captionStyles)(({ children, classes, ...otherProps}) => (
   <figcaption className={classes.caption} {...otherProps}>{children}</figcaption>)
);

const titleStyles = {
    title: {
        margin: 0
    }
}

export const CaptionTitle = injectSheet(titleStyles)(({ children, classes, ...otherProps}) => (
    <h4 className={classes.title} {...otherProps}>{children}</h4>
));

const bodyStyles = {
    body: {
        fontSize: 11
    }
}

export const CaptionBody = injectSheet(bodyStyles)(( {classes, children, ...otherProps}) => (
    <div className={classes.body} { ...otherProps }>{ children }</div>
));

export default Caption;