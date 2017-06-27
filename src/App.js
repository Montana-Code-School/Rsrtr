import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import gmap from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCr6EwvdOcCpVEe5Xir9aLi_neVGEu6THA'

class App extends Component {











  render() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log('Oh snap')
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
