
const BoredAPI = {
  // Fetch a random activity
  getRandomActivity: async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const activity = await response.json()
      return activity;
    } catch (error) {
      throw new Error('Failed to fetch random activity');
    }
  },

  // Fetch an activity by type
  getActivityByType: async (type) => {
    try {
      const response = await fetch(`https://www.boredapi.com/api/activity?type=${type}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch activity by type');
    }
  },

  getActivityByParticipants: async (participants) => {
    try {
      const response = await fetch(`https://www.boredapi.com/api/activity?participants=${participants}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch activity by participants');
    }
  },

  getActivityByPrice: async (price) => {
    try {
      const response = await fetch(`https://www.boredapi.com/api/activity?price=${price}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch activity by price');
    }
  },
};

module.exports = BoredAPI;
