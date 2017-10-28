import * as React from 'react';
import injectSheet from 'react-jss';
import Hideable from './hideable';

export default class ShowOnMouseMove extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shown: props.showInitially ? true : false,
            timeout: null
        }
    }
    
    componentDidMount() {
        if(this.state.shown) {
            this.show();
        }
    }

    show = () => {
        if(this.state.timeout) {
            clearTimeout(this.state.timeout);
        }
        this.setState({shown: true,
        timeout: setTimeout(() => {this.setState({shown: false})}, this.props.timeToShow ? this.props.timeToShow : 5000)});
        
        
    }

    render() {
        const {showInitially, timeToShowInitially, ...otherProps} = this.props;
        return(
            <Hideable onMouseMove={this.show} show={this.state.shown} {...otherProps}>
                {this.props.children}
            </Hideable>
        )
    }
}