const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Use CORS to allow requests from all origins
app.use(cors());

// Define the root route to fetch news based on category
app.get('/', async (req, res) => {
  const { category } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: category || 'general',
        country: 'in',
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });

    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
