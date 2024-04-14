const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8080;

// Enable CORS for all routes
app.use(cors());

// Define a simple endpoint
app.get('/api/data', async (req, res) => {
  try {
    // Make a GET request to the external API
    const response = await axios.get('https://sansad.in/api_ls/member', {
      params: {
        loksabha: 17,
        // Add other query parameters as needed
      }
    });

    // Return the response data to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/memberDetails', async (req, res) => {
  const memberId = req.query.id;
  try {
      const response = await axios.get(`https://sansad.in/api_ls/member/${memberId}`);
      res.status(200).json(response.data);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
