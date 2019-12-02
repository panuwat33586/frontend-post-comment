import React, { Component } from 'react'
import './App.css';
import Postlist from './components/Postlist';

export class App extends Component {
  render() {
    return (
      <div>
        <Postlist/>
      </div>
    )
  }
}

export default App
