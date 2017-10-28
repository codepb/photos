import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
    hide: {
        transition: '2s',
        opacity: 0,
    },
    show: {
        transition: '2s',
        opacity: 1
    }
}

const Hideable = ({show, classes, showInitially, children, ...otherProps}) => {    
    return(
        <div className={show ? classes.show : classes.hide} {...otherProps}>
            {children}
        </div>
    )
}

export default injectSheet(styles)(Hideable);