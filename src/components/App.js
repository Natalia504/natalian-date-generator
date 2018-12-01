import React, { Component } from 'react';
import './App.css';
import YelpCalls from './yelpCalls';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <YelpCalls />
      </div>
    );
  }
}

export default App;
