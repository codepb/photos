import * as React from 'react';
import injectSheet from 'react-jss';

const buttonStyles = {
    button: {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        fontSize: 14
    }
}

const Button = injectSheet(buttonStyles)(({children, classes, ...otherProps}) => (
    <div className={classes.button} {...otherProps}>{children}</div>
));

export default Button;