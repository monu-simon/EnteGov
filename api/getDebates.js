// api/getDebates.js

const axios = require('axios');

module.exports = async (req, res) => {
  const memberId = req.query.id;
  try {
    const response = await axios.get(`https://sansad.in/api_ls/debate/debate-search`,
    {
      params: {
        loksabha: 17,
        mpCode: memberId,
        page: 1,
        size: 10
        // Add other query parameters as needed
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
