import React, {Component} from 'react';
import 'whatwg-fetch'

export default class Quinntest extends Component {

  componentDidMount() {
   fetch('https://developers.zomato.com/api/v2.1/cities?lat=46.86&lon=-113.97', {
      //method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': 'b3549408bdd1a9da0380f2f2aaf4efa6'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      // this.setState({
      //   isLoading: false,
      //   dataSource:responseJson.movies
      // });
      console.log(responseJson)
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {


    return (
      <div> HAI
    </div>
    );
  }
}

//my late night guess, is this is not going to maintain a react component, but rather will become a backend server function request (thingy) when the uses hits the submit button on filters (which would change the url in the fetch.). 
