import * as React from 'react';
import injectSheet from 'react-jss';
import Hideable from './hideable';

export default class ShowOnHover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shown: props.showInitially ? true : false
        }
    }
    
    componentDidMount() {
        if(this.state.shown) {
            setTimeout(() => {this.setState({shown: false})}, this.props.timeToShowInitially ? this.props.timeToShowInititally : 5000);
        }
    }

    show = () => {
        this.setState({shown: true});
    }

    hide = () => {
        this.setState({shown: false});
    }

    render() {
        const {showInitially, timeToShowInitially, ...otherProps} = this.props;
        return(
            <Hideable onMouseEnter={this.show} onMouseLeave={this.hide} show={this.state.shown} {...otherProps}>
                {this.props.children}
            </Hideable>
        )
    }
}