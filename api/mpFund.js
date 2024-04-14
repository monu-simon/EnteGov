// api/mpfund.js

const axios = require('axios');

module.exports = async (req, res) => {
  const memberId = req.query.id;
  try {
    const response = await axios.get(`https://sansad.in/api_poi/cons-connect/mplad/mp-fund?mpCode=${memberId}&house=ls`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
