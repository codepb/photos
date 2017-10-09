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

class ShowOnHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: false
        }
    }

    show = () => {
        this.setState({shown: true});
    }

    hide = () => {
        this.setState({shown: false});
    }

    render() {
        const {classes, ...otherProps} = this.props
        return(
            <div onMouseEnter={this.show} onMouseLeave={this.hide} className={this.state.shown ? this.props.classes.show : this.props.classes.hide} {...otherProps}>
                {this.props.children}
            </div>
        )
    }
}

export default injectSheet(styles)(ShowOnHover);