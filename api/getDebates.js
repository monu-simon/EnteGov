const axios = require('axios');

module.exports = async (req, res) => {
  const memberId = req.query.id;
  try {
    const response = await axios.get(`https://sansad.in/api_ls/debate/debate-search?debateTypeId=&loksabha=17&sessionNumber=&fromDate=&toDate=&searchKeyword=&page=1&size=10&mpCode=${memberId}&sortBy&sortOrder`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
