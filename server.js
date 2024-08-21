const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const NEWS_API_KEY = 'YOUR_NEWS_API_KEY'; // Replace with your News API key

app.get('/api/news', async (req, res) => {
  try {
    const { category } = req.query;
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'in',
        category: category,
        apiKey: NEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
