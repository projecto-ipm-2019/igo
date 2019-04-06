import React, { Component } from 'react';
import './App.css';

// IGo with capitalized I because React Components need to start with capitalized letter
import IGo from "./Containers/iGo/iGo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IGo/>
      </div>
    );
  }
}

export default App;
