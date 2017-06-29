import React, {Component} from 'react';
import 'whatwg-fetch'

export default class Quinntest extends Component {
  state = {
    lat: '',
    lng: '',
    finished: null
  }

  suggest(){
    fetch(`https://developers.zomato.com/api/v2.1/search?lat=${this.state.lat}&lon=${this.state.lng}`, {
      //method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': 'b3549408bdd1a9da0380f2f2aaf4efa6'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        const restNameArr =  responseJson.restaurants.map((obj)=> obj.restaurant.name)
        //  console.log(responseJson.restaurants.map((obj)=> obj.restaurant.name))
        return restNameArr
    })
    .then((result) =>{
     console.log("2nd result", result);
     var randNum = (Math.floor(Math.random() * result.length-1));
     const chosenOne = (result[randNum])
     this.setState({finished: chosenOne})
   })
    .catch((error) => {
      console.error(error);
    });
  }



  componentDidMount() {
    console.log('Component mounting')
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({lat: position.coords.latitude,
                       lng: position.coords.longitude},  this.suggest.bind(this))

      });
    } else {
      console.log('Oh snap')
    }

  }

  render() {

    return (
      <div> {this.state.finished}
      </div>
        //  {this.state.lat ? "You are located at " + this.state.lat + " , " + this.state.lng : "No location found"}


    );
  }
}

//my late night guess, is this is not going to maintain a react component, but rather will become a backend server function request (thingy) when the uses hits the submit button on filters (which would change the url in the fetch.).
