import React, { Component } from 'react';
import 'dotenv/config';
// import Button from '@material-ui/core/Button';


// const apiKey='iJLvp6Ks9Mgq8KutYmvIeR_tgDTyrczgYZf93-6S6TO51EDuxtrS1_En2kSYaQkpmWqpWvGB7Loc5Tykj0BOfWyizLMzgtTTAoac_S8JLkyXz6xN6k3BgeizChYCXHYx';

class YelpCalls extends Component {
  constructor(){
    super()
    this.state={
      allCategories: [],
    }
  }

  // componentDidMount = () => {
  //
  //   return fetch('https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco', {
  //     method: 'GET',
  //     contentType:"application/json",
  //     headers: {'Authorization': 'Bearer ' + apiKey},
  //     mode: 'no-cors'
  //   })
  //     .then(res => {
  //
  //     })
  // }

  render() {
    return(
      <div>

      </div>
    );
  }
}

export default YelpCalls;
