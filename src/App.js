import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Gallery from './components/gallery';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

export default App;
