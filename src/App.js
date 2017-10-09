import React, { Component } from 'react';
import './App.css';
import GalleryContainer from './containers/gallery';
import Home from './pages/home';
import GalleryOverview from './pages/galleryOverview';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
