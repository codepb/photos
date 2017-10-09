import * as React from 'react';

export default class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: null,
            initialTouch: null,
            touch: null,
            swipeStart: null
          }  
    }

    getInitialState = () => ({
        direction: null,
        initialTouch: null,
        touch: null,
        swipeStart: null
      }); 
    
    render(){
        var Component = this.props.component || this.props.tagName;
        const {children, component, tagName, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, minSwipeLength, moveThreshold, style, ...otherProps} = this.props;
        const componentStyle = {
            touchAction: 'pinch-zoom',
            ...style
        }
        return (
          <Component {...otherProps} onTouchStart={this.handleTouchStart}
              onTouchEnd={this.handleTouchEnd}
              onTouchCancel={this.handleTouchEnd}
              onTouchMove={this.handleTouchMove}
              style={componentStyle}>
            {this.props.children}
          </Component>
        );
      }
    
      handleTouchStart = (e) => {
        if (e.touches.length !== 1) {
          return;
        }
        this._initiateSwipe(e.touches[0]);
      }
    
      handleTouchEnd = (e) => {
        if (!this.state.direction) {
          return;
        }
        if (this._getSwipeLength(this.state.initialTouch) > this.props.minSwipeLength) {
          var method = this._getEventMethodName();
          var evt = {
            type: this._getEventTypeName(),
            timeStampStart: this.state.swipeStart,
            timeStampEnd: new Date(),
            initialTouch: this.state.initialTouch,
            finalTouch: this.state.touch
          };
          this.props.onSwipe && this.props.onSwipe(evt);
          this.props[method] && this.props[method](evt);
          e.preventDefault();
        }
        this._resetSwipe();
      }
    
      handleTouchMove = (e) => {
        if (e.touches.length !== 1 || !this.state.direction) {
          return;
        }
        var touch = e.touches[0];
        var direction = this._getSwipeDirection(touch);
        if (this._isSwipeDirectionUnchanged(direction)) {
          this._updateSwipe(direction, touch);
          e.preventDefault();
          return;
        }
        this._resetSwipe();
      }
    
      _initiateSwipe = (touch) => {
        this.setState({direction: {x: null, y: null}, initialTouch: touch, touch: touch, swipeStart: new Date()});
      }
    
      _resetSwipe = () => {
        this.setState(this.getInitialState());
      }
    
      _updateSwipe = (direction, touch) => {
        this.setState({direction, touch});
      }
    
      _getSwipeLength = (touch) => {
        return this._getSwipeLengthX(touch) + this._getSwipeLengthY(touch);
      }
    
      _getSwipeLengthX = (touch) => {
        return Math.abs(touch.pageX - this.state.touch.pageX);
      }
    
      _getSwipeLengthY = (touch) => {
        return Math.abs(touch.pageY - this.state.touch.pageY);
      }
    
      _getSwipeDirection = (touch) => {
        var dir = {x: this.state.direction ? this.state.direction.x : null, y: this.state.direction ? this.state.direction.y : null};
        if (this._getSwipeLengthY(touch) > this.props.moveThreshold) {
          dir.y = this._getSwipeDirectionY(touch);
        }
        if (this._getSwipeLengthX(touch) > this.props.moveThreshold) {
          dir.x = this._getSwipeDirectionX(touch);
        }
        return dir;
      }
    
      _getSwipeDirectionX = (touch) => {
        return touch.pageX < this.state.touch.pageX ? 'Left' : 'Right';
      }
    
      _getSwipeDirectionY = (touch) => {
        return touch.pageY < this.state.touch.pageY ? 'Up' : 'Down';
      }
    
      _getSwipeDirectionName = () => {
        return (this.state.direction.y || '') + (this.state.direction.x || '');
      }
    
      _isSwipeDirectionUnchanged = (direction) => {
        return (!this.state.direction.x || this.state.direction.x === direction.x) &&
               (!this.state.direction.y || this.state.direction.y === direction.y);
      }
    
      _getEventMethodName = () => {
        return 'onSwipe' + this._getSwipeDirectionName();
      }
    
      _getEventTypeName = () => {
        return 'swipe' + this._getSwipeDirectionName();
      }   
}

Swiper.defaultProps = {
    tagName: 'div',
    minSwipeLength: 25,
    moveThreshold: 10
};
      
