import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import GalleryContainer from './containers/gallery';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GalleryContainer />
      </div>
    );
  }
}

export default App;
