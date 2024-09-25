// import React, { useState, useEffect } from 'react';
// import { getStock } from './getStock';  // Import the getStock function
// import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
// import { CSSTransition } from 'react-transition-group';
// import './App.css'; // Assuming the same CSS for animations

// const Dashboard = () => {
//   const [symbol, setSymbol] = useState('AAPL');
//   const [stock, setStock] = useState(null);
//   const [showCard, setShowCard] = useState(false);

//   const fetchStockData = async () => {
//     try {
//       const stockData = await getStock(symbol);  // Use the getStock function
//       setStock(stockData);
//       setShowCard(true);
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchStockData();  // Fetch the stock data on initial render
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <Typography variant="h4" gutterBottom>
//         Stock Dashboard
//       </Typography>

//       <Grid container spacing={2} alignItems="center" justifyContent="center">
//         <Grid item>
//           <TextField
//             label="Stock Symbol"
//             value={symbol}
//             onChange={(e) => setSymbol(e.target.value)}
//           />
//         </Grid>
//         <Grid item>
//           <Button variant="contained" onClick={fetchStockData}>
//             Fetch Stock
//           </Button>
//         </Grid>
//       </Grid>

//       {stock && (
//         <CSSTransition in={showCard} timeout={500} classNames="card" unmountOnExit>
//           <Card style={{ marginTop: '2rem', width: '300px' }}>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 {stock.symbol}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Price: ${stock.price}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Change: {stock.change}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 % Change: {stock.percentChange}
//               </Typography>
//             </CardContent>
//           </Card>
//         </CSSTransition>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { getTopStocks } from './getStock';  // Import the getTopStocks function
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './App.css'; // Assuming the same CSS for animations

const Dashboard = () => {
  const [topStocks, setTopStocks] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const fetchTopStocksData = async () => {
    try {
      const stocks = await getTopStocks();  // Fetch the top 20 stocks
      setTopStocks(stocks);
      setShowCards(true);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  // Fetch the data initially and then set it to update every 30 seconds
  useEffect(() => {
    fetchTopStocksData();
    
    const intervalId = setInterval(() => {
      fetchTopStocksData();
    }, 30000);  // Fetch new data every 30 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Top 20 Stocks (Updated every 30 seconds)
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {topStocks.map((stock, index) => (
          <Grid item key={stock.symbol} xs={12} sm={6} md={4}>
            {/* Display in different color for top 10 stocks */}
            <Card
              style={{
                backgroundColor: index < 10 ? '#f5f5f5' : '#e0e0e0',  // Lighter color for top 10
                marginTop: '1rem',
                width: '300px',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {stock.symbol}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${stock.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Change: {stock.change}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  % Change: {stock.percentChange}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
