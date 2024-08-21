const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

// Allow CORS (Optional, if you want to limit it to your domain, specify the origin)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Proxy endpoint
app.get('/api/news', async (req, res) => {
    try {
        const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`);
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
