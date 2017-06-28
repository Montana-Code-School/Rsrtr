import React, { Component } from 'react';
import burger from './burger.png';
import './App.css';
//import gmap from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCr6EwvdOcCpVEe5Xir9aLi_neVGEu6THA'
import Quinn from './quinnTestReq'
import 'whatwg-fetch'

class App extends Component {

  state = {
    recommendation : <Quinn key={Math.random()}/>
  }


//fetch('/quinnTestReq' + this.state.finished )


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
          <img src={burger} className="App-logo" alt="logo" />
          <h2>Restaurantr</h2>
        </div>
        <p className="App-intro">
          Press the button to find a place to eat!
        </p>
                <div>

               <button onClick={()=>this.setState({recommendation: <Quinn key={Math.random()}/>})}> Where are we going? </button>



                </div>

                {this.state.recommendation}
      </div>
    );
  }
}



export default App;
