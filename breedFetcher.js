const request = require('request');
const args = process.argv[2];
// console.log(args);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log("typeof body", typeof body)
  // console.log(data);
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('The requested breed is not found');
    } else {
      const description = data[0].description;
      console.log(description);

    }
  }
  // console.log("typeof data", typeof data);
});