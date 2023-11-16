const axios = require('axios');

const BoredAPI = {
  // Fetch a random activity
  getRandomActivity: async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch random activity');
    }
  },

  // Fetch an activity by type
  getActivityByType: async (type) => {
    try {
      const response = await axios.get(`https://www.boredapi.com/api/activity?type=${type}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch activity by type');
    }
  },

  getActivityByParticipants: async (participants) => {
    try {
      const response = await axios.get(`https://www.boredapi.com/api/activity?participants=${participants}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch activity by participants');
    }
  },

  getActivityByPrice: async (price) => {
    try {
      const response = await axios.get(`https://www.boredapi.com/api/activity?price=${price}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch activity by price');
    }
  },
};

module.exports = BoredAPI;
