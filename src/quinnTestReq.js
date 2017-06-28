import React, {Component} from 'react';
import 'whatwg-fetch'

let lat;
let lng;


export default class Quinntest extends Component {
  state = {
    lat: null,
    lng: null
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        lat = position.coords.latitude,
        lng = position.coords.longitude;
        this.setState({lat: lat, lng: lng},  ()=>{
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
            console.log(responseJson.restaurants.map((obj)=> obj.restaurant.name))
          })
          .catch((error) => {
            console.error(error);
          });
        })
      });
    } else {
      console.log('Oh snap')
    }

  }

  render() {

    return (
      <div>
        {this.state.lat ? "You are located at " + this.state.lat + " , " + this.state.lng : "No location found"}
      </div>
    );
  }
}

//my late night guess, is this is not going to maintain a react component, but rather will become a backend server function request (thingy) when the uses hits the submit button on filters (which would change the url in the fetch.).
