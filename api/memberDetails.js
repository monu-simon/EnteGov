// api/memberDetails.js

const axios = require('axios');

module.exports = async (req, res) => {
    const memberId = req.query.id; // Extract memberId from query parameter
    try {
        const response = await axios.get(`https://sansad.in/api_ls/member/${memberId}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
