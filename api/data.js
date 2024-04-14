// api/data.js

const axios = require('axios');

module.exports = async (req, res) => {
  try {
    // Make a GET request to the external API
    const response = await axios.get('https://sansad.in/api_ls/member', {
      params: {
        loksabha: 17,
        // Add other query parameters as needed
      }
    });

    // Return the response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
