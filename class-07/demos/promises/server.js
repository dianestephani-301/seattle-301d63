'use strict';

const superagent = require('superagent');

let url = 'https://pokeapi.co/api/v2/pokemon/';

superagent.get(url)
  .then(resultsFromSuperAgent => {
    console.log('I the first console.log - in the results from superagent')
    // console.log(resultsFromSuperAgent.body);
  }).catch(err => {
    console.log(err);
  })

console.log('I am the second console.log - the bottom of the page');
