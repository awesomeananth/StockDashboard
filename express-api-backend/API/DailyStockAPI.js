const express = require('express');
const axios = require('axios');
const router = express.Router();
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;



// Route to get daily stock data
router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;

    try {
        const response = await axios.get(apiUrl);
        const stockData = response.data;

        if (stockData) {
            res.json(stockData);
        } else {
            res.status(404).json({ error: 'Stock data not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});

module.exports = router;
