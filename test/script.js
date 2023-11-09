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
BoredAPI.getActivityByType('music') //Choose activity (education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork)
  .then((data) => {
    console.log('Activity by type :', data.activity);
  })
  .catch((error) => {
    console.error(error.message);
  });
  BoredAPI.getActivityByParticipants('5') //1-5
  .then((data) => {
    console.log('Activity according to the people :', data.activity);
  })
  .catch((error) => {
    console.error(error.message);
  });

  BoredAPI.getActivityByPrice('0.6') //Choose price 0.0 - 0.6
  .then((data) => {
    console.log('Activity according to budget :', data.activity);
  })
  .catch((error) => {
    console.error(error.message);
  });
