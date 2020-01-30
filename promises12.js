#!/usr/bin/env bash

const axios = require("axios");
let cityName = process.argv[2];
let anotherResponse;
async function helper(){
  let response;
  try {
    response = await axios.get("https://www.metaweather.com/api/location/search/?query=" + cityName);
    //console.log(response.data);
  }
  catch(err) {
    console.log("Some error occured");
  }

  let woeid = response.data[0].woeid;
  const rawResponse = await axios.get("https://www.metaweather.com/api/location/" + woeid + "/");
  anotherResponse = rawResponse;
  //console.log(anotherResponse);
  const todaysWeather = anotherResponse.data.consolidated_weather[0];
  const currentState = todaysWeather["weather_state_name"];
  //const temper = Math.ceil(anotherResponse.data.consolidated_weather[0].the_temp);
}

helper();



console.log(`Current condition in ${cityName} ${currentState}`);