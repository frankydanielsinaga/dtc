import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Welcome from './component/Welcome';
import Logo from './component/Logo';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Welcome />
        <Logo />
      </div>
    );  
  }
}

export default App;
