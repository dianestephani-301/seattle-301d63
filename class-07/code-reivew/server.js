'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/location', (request, response) => {
  const city = request.query.city;
  const geoData = require('./data/location.json');
  const returnObj = new Location(city, geoData[0]);
  response.status(200).send(returnObj);
})

app.get('/weather', (request, response) => {
  try{
    let search_query = request.query.search_query;
    console.log('the thing the front end is sending on the weather route', search_query);

  //   { search_query: 'olympia',
  // formatted_query: 'Lynnwood, Snohomish County, Washington, USA',
  // latitude: '47.8278656',
  // longitude: '-122.3053932',
  // page: '1' }


    let weatherArray = [];
    let weatherData = require('./data/weather.json');
    
    weatherData.data.forEach(day => {
      weatherArray.push(new Weather(day));
    })

    response.status(200).send(weatherArray);

  } catch(err){
    console.log('ERROR', err);
  }
})

function Weather(obj){
  this.forecast = obj.weather.description;
  this.time = obj.datetime;
}

function Location(searchQuery, obj){
  this.search_query = searchQuery;
  this.formatted_query = obj.display_name;
  this.latitude = obj.lat;
  this.longitude = obj.lon;
}

// {
//   "search_query": "seattle",
//   "formatted_query": "Seattle, WA, USA",
//   "latitude": "47.606210",
//   "longitude": "-122.332071"
// }

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})