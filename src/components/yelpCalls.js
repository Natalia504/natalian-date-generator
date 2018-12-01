import React, { Component } from 'react';
import axios from 'axios';
import 'dotenv/config';

const apiKey='iJLvp6Ks9Mgq8KutYmvIeR_tgDTyrczgYZf93-6S6TO51EDuxtrS1_En2kSYaQkpmWqpWvGB7Loc5Tykj0BOfWyizLMzgtTTAoac_S8JLkyXz6xN6k3BgeizChYCXHYx';

class YelpCalls extends Component {
  constructor(){
    super()
    this.state={
      allCategories: [],
    }
  }

  componentDidMount = () => {
    return axios({
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco',
      headers: {
        'Access-Control-Allow-Origin': 'https://api.yelp.com/v3/',
        Authorization: `Bearer ${apiKey}`
      },
    })
      .then(res => console.log(res));
  }



  render() {
    return(
      <div>

      </div>
    );
  }
}

export default YelpCalls;
