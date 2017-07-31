import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>mlars-React-app</h2>
        </div>
        <div className="App-menu">
          <nav>
            <a href="/home">Home</a>
            <a href="/work">Work</a>
            <a href="/about">About</a>
          </nav>
        </div>
        <p className="App-intro">
          This is my first app built with ReactJS <button>Button</button>
        </p>
      </div>
    );
  }
}

export default App;
