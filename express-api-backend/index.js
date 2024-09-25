// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');  // Import cors
// require('dotenv').config();

// const app = express();
// const PORT = 3001;

// // Use CORS to allow requests from all origins or specify certain origins
// app.use(cors({
//   origin: 'http://localhost:3000'  // Replace with your React app's origin
// }));

// // Alpha Vantage API Key
// const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

// // Root route (/) to respond with a simple message
// app.get('/', (req, res) => {
//     res.send('Welcome to the Stock Dashboard API');
// });

// // API Endpoint to fetch stock data from Alpha Vantage
// app.get('/api/stock/:symbol', async (req, res) => {
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

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// // Enable CORS for all routes (you can also restrict this to specific origins)
// app.use(cors());

// // Import API routes
// const dailyStockAPI = require('./DailyStockAPI');
// const weeklyStockAPI = require('./WeeklyStockAPI');
// const monthlyStockAPI = require('./MonthlyStockAPI');

// // Use the API routes
// app.use('/api/daily', dailyStockAPI);
// app.use('/api/weekly', weeklyStockAPI);
// app.use('/api/monthly', monthlyStockAPI);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = 3001;

// // Enable CORS for all routes
// app.use(cors());

// // Import API routes
// const dailyStockAPI = require('./DailyStockAPI');
// const weeklyStockAPI = require('./WeeklyStockAPI');
// const monthlyStockAPI = require('./MonthlyStockAPI');
// const searchStockAPI = require('./SearchStockAPI');  

// // Use the API routes
// app.use('/api/daily', dailyStockAPI);
// app.use('/api/weekly', weeklyStockAPI);
// app.use('/api/monthly', monthlyStockAPI);
// app.use('/api/stock', searchStockAPI);  

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });






const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Import the API routes
const dailyStockAPI = require('./API/DailyStockAPI');
const weeklyStockAPI = require('./API/WeeklyStockAPI');
const monthlyStockAPI = require('./API/MonthlyStockAPI');
const searchStockAPI = require('./API/SearchStockAPI');

// Use the API routes
app.use('/api/daily', dailyStockAPI);
app.use('/api/weekly', weeklyStockAPI);
app.use('/api/monthly', monthlyStockAPI);
app.use('/api/stock', searchStockAPI);  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
