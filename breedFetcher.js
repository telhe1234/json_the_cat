const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback('The requested breed is not found', null);
      } else {
        const description = data[0].description;
        callback(null, description);

      }
    }
  });

};

module.exports = { fetchBreedDescription };