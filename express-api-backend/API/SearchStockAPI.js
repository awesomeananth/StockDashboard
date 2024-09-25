// const express = require('express');
// const axios = require('axios');
// const router = express.Router();
// const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

// // API Endpoint to search stock data by symbol
// router.get('/:symbol', async (req, res) => {
//     const { symbol } = req.params;
//     const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;

//     try {
//         const response = await axios.get(apiUrl);
//         const stockData = response.data['Global Quote'];

//         if (stockData) {
//             res.json({
//                 symbol: stockData['01. symbol'],
//                 price: stockData['05. price'],
//                 change: stockData['09. change'],
//                 percentChange: stockData['10. change percent'],
//             });
//         } else {
//             res.status(404).json({ error: 'Stock not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching stock data' });
//     }
// });

// module.exports = router;  // Make sure you're exporting the router


const express = require("express");
const axios = require("axios");
const router = express.Router();
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

// Define the route to fetch stock data
router.get("/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    const stockData = response.data["Global Quote"];

    if (stockData) {
      res.json({
        symbol: stockData["01. symbol"],
        price: stockData["05. price"],
        change: stockData["09. change"],
        percentChange: stockData["10. change percent"],
      });
    } else {
      res.status(404).json({ error: "Stock not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching stock data" });
  }
});

module.exports = router;
