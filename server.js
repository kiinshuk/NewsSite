const axios = require('axios');

module.exports = async (req, res) => {
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
};
