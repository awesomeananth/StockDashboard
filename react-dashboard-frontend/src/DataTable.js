import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

// Handle null or undefined values
const formatValue = (value) => {
  return value ? value : "N/A"; // Return 'N/A' for null or undefined values
};

const DataTable = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <Typography>No data available</Typography>;
  }

  const rows = Object.keys(data).map((date) => ({
    date,
    open: data[date]["1. open"] || "N/A",
    high: data[date]["2. high"] || "N/A",
    low: data[date]["3. low"] || "N/A",
    close: data[date]["4. close"] || "N/A",
    volume: data[date]["5. volume"] || "N/A",
  }));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>High</TableCell>
            <TableCell>Low</TableCell>
            <TableCell>Close</TableCell>
            <TableCell>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{formatValue(row.open)}</TableCell>
              <TableCell>{formatValue(row.high)}</TableCell>
              <TableCell>{formatValue(row.low)}</TableCell>
              <TableCell>{formatValue(row.close)}</TableCell>
              <TableCell>{formatValue(row.volume)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
