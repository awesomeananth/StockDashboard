// import React, { useState, useEffect } from 'react';
// import { Grid, Typography, CircularProgress } from '@mui/material';
// import axios from 'axios';

// // Fetch Stock Data Helper
// const fetchStockData = async (url, setData, setLoading) => {
//   setLoading(true);
//   try {
//     const response = await axios.get(url);
//     setData(response.data);
//   } catch (error) {
//     console.error('Error fetching stock data:', error);
//     setData(null);
//   } finally {
//     setLoading(false);
//   }
// };

// // Component to Display Stock Data
// export const StockDataDisplay = ({ data }) => {
//   const renderStockData = (obj) => {
//     return Object.keys(obj).map((key, index) => {
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         return (
//           <Grid item key={index} xs={12}>
//             <Typography variant="h6">{key}</Typography>
//             {renderStockData(obj[key])} {/* Recursively render nested objects */}
//           </Grid>
//         );
//       } else {
//         return (
//           <Grid item key={index} xs={12}>
//             <Typography variant="body1">
//               {key}: {obj[key]}
//             </Typography>
//           </Grid>
//         );
//       }
//     });
//   };

//   return <Grid container spacing={2}>{renderStockData(data)}</Grid>;
// };

// // Daily Stock Tab Component
// export const DailyStockTab = ({ symbol }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStockData(`http://localhost:3001/api/daily/${symbol}`, setData, setLoading);
//   }, [symbol]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return data ? <StockDataDisplay data={data} /> : <Typography>No data available</Typography>;
// };

// // Weekly Stock Tab Component
// export const WeeklyStockTab = ({ symbol }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStockData(`http://localhost:3001/api/weekly/${symbol}`, setData, setLoading);
//   }, [symbol]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return data ? <StockDataDisplay data={data} /> : <Typography>No data available</Typography>;
// };

// // Monthly Stock Tab Component
// export const MonthlyStockTab = ({ symbol }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStockData(`http://localhost:3001/api/monthly/${symbol}`, setData, setLoading);
//   }, [symbol]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return data ? <StockDataDisplay data={data} /> : <Typography>No data available</Typography>;
// };

// // Search Stock Tab Component
// export const SearchStockTab = ({ symbol }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStockData(`http://localhost:3001/api/stock/${symbol}`, setData, setLoading);
//   }, [symbol]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return data ? <StockDataDisplay data={data} /> : <Typography>No data available</Typography>;
// };

import React, { useState, useEffect } from "react";
import { sampleData, fallbackMessage } from "./sampleData";
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";
import { DailyChart, WeeklyChart, MonthlyChart } from "./charts";
import DataTable from "./DataTable";
import SearchCard from "./SearchCard";

// Fetch stock data with fallback for rate limits
const fetchStockData = async (url, setData, setLoading, fallback) => {
  setLoading(true);
  try {
    const response = await axios.get(url);
    if (response.data.Information) {
      setData(fallback); // Fallback if rate-limited
    } else {
      setData(response.data);
    }
  } catch (error) {
    // console.error("Error fetching stock data", error);
    setData(fallback); // Use sample data as fallback
  } finally {
    setLoading(false);
  }
};

// Daily Tab Component
export const DailyStockTab = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStockData(
      `http://localhost:3001/api/daily/${symbol}`,
      setData,
      setLoading,
      sampleData
    );
  }, [symbol]);

  if (loading) {
    return <CircularProgress />;
  }

  return data ? (
    <>
      <DataTable data={data["Time Series (Daily)"]} />
      <DailyChart data={data["Time Series (Daily)"]} />
    </>
  ) : (
    <Typography>No data available</Typography>
  );
};

// Weekly Tab Component
export const WeeklyStockTab = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStockData(
      `http://localhost:3001/api/weekly/${symbol}`,
      setData,
      setLoading,
      sampleData
    );
  }, [symbol]);

  if (loading) {
    return <CircularProgress />;
  }

  return data ? (
    <>
      <DataTable data={data["Time Series (Weekly)"]} />
      <WeeklyChart data={data["Time Series (Weekly)"]} />
    </>
  ) : (
    <Typography>No data available</Typography>
  );
};

// Monthly Tab Component

export const MonthlyStockTab = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStockData(
      `http://localhost:3001/api/monthly/${symbol}`,
      setData,
      setLoading,
      sampleData
    );
  }, [symbol]);

  if (loading) {
    return <CircularProgress />;
  }

  return data ? (
    <>
      <DataTable data={data["Monthly Time Series"]} />
      <MonthlyChart data={data["Monthly Time Series"]} />
    </>
  ) : (
    <Typography>No data available</Typography>
  );
};

// Search Tab Component (Displays Cards)
export const SearchStockTab = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStockData(
      `http://localhost:3001/api/stock/${symbol}`,
      setData,
      setLoading,
      sampleData
    );
  }, [symbol]);

  if (loading) {
    return <CircularProgress />;
  }

  return <Typography>No data available</Typography>;

  //   return data ? (
  //     <SearchCard data={data} />
  //   ) : (
  //     <Typography>No data available</Typography>
  //   );
};
