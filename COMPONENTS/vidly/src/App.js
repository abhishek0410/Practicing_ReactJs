import React, { Component } from 'react';
import Movies from "./components/movies";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className = "Container">
      <Movies></Movies>
      
      </main>
    );
  }
}

export default App;
