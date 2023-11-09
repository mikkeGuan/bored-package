// boredapi-package.js
const axios = require('axios');

const BoredAPI = {
  // Fetch a random activity
  getRandomActivity: () => {
    return axios
      .get('https://www.boredapi.com/api/activity')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error('Failed to fetch random activity');
      });
  },

  // Fetch an activity by a specific type
  getActivityByType: (type) => {
    return axios
      .get(`https://www.boredapi.com/api/activity?type=${type}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error('Failed to fetch activity by type');
      });
  },
  getActivityByParticipants: (participants) => {
    return axios
      .get(`https://www.boredapi.com/api/activity?participants=${participants}`) //Participants ranges from 1-5
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error('Failed to fetch activity by participants');
      });
  },
  getActivityByPrice: (price) => {
    return axios
      .get(`https://www.boredapi.com/api/activity?price=${price}`) // 0 is free and pricing goes up to 0.6
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error('Failed to fetch activity by price');
      });
  },
};

module.exports = BoredAPI;
