import React, { Component } from 'react';
import 'typeface-roboto';
import 'typeface-raleway';
import './App.css';
import GalleryContainer from './containers/gallery';
import Home from './pages/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GalleryContainer/>
      </div>
    );
  }
}

export default App;
