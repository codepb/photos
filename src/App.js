import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import 'typeface-raleway';
import GalleryContainer from './containers/gallery';
import Home from './pages/home';


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
