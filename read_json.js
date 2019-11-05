// import the file system module
const fs = require('fs');

// save the file name of our data in a variable (increase readability)
const FILE_NAME = 'cadastro.json';

const readFileAsync = () => {
  // run async function to read file
  fs.readFile(FILE_NAME, (error, data) => {
    console.log('Async Read: starting...');

    if (error) {
      // if there is an error, print it
      console.log('Async Read: NOT successful!');
      console.log(error);
    } else {
      try {
        // try to parse the JSON data
        const dataJson = JSON.parse(data);
        console.log('Async Read: successful!');
        console.log(dataJson);
      } catch (error) {
        // else print an error (e.g. JSON was invalid)
        console.log(error);
      }
    }
  });
};

// run the function
readFileAsync();
