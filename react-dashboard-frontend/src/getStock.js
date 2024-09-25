// import axios from 'axios';

// // Define the function to fetch stock data from the API
// export const getStock = async (symbol) => {
//   try {
//     const response = await axios.get(`http://localhost:3001/api/stock/${symbol}`);
//     return response.data;  // Return the stock data
//   } catch (error) {
//     console.error('Error fetching stock data:', error);
//     throw error;  // Propagate the error to the caller
//   }
// };


import axios from 'axios';

// Function to fetch the top 20 stocks
export const getTopStocks = async () => {
  try {
    // Replace this URL with the actual endpoint that provides multiple stock data
    const response = await axios.get(`http://localhost:3001/api/top-stocks`);
    
    // Assuming the API returns an array of stocks
    const topStocks = response.data.slice(0, 20);  // Get the top 20 stocks

    return topStocks;  // Return the array of top stocks
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;  // Propagate the error to the caller
  }
};
