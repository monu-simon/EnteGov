// getImage.js
const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const mpsno = req.query.mpsno;
        if (!mpsno) {
            return res.status(400).json({ error: 'MPS number (mpsno) is required' });
        }

        const imageUrl = `https://sansad.in/getFile/mpimage/photo/${mpsno}.jpg?source=loksabhadocs`;

        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer'
        });

        const contentType = response.headers['content-type'];
        res.setHeader('Content-Type', contentType);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
