const BoredAPI = require('bored-package'); // Adjust the path as needed

// Example of using getRandomActivity
BoredAPI.getRandomActivity()
  .then((data) => {
    console.log('Random Activity:', data.activity);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Example of using getActivityByType
BoredAPI.getActivityByType('music') //Choose activity
  .then((data) => {
    console.log('Activity of type :', data.activity);
  })
  .catch((error) => {
    console.error(error.message);
  });
