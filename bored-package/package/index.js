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
};

module.exports = BoredAPI;
