import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Prepare data for charts
const prepareChartData = (data) => {
  if (!data || Object.keys(data).length === 0) return [];

  return Object.keys(data).map((key) => ({
    date: key,
    open: parseFloat(data[key]["1. open"]) || 0,
    close: parseFloat(data[key]["4. close"]) || 0,
  }));
};

// Daily Chart
export const DailyChart = ({ data }) => {
  const chartData = prepareChartData(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="close" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Weekly Chart
export const WeeklyChart = ({ data }) => {
  const chartData = prepareChartData(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="close" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Monthly Chart
export const MonthlyChart = ({ data }) => {
  const chartData = prepareChartData(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="close" stroke="#ffc658" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
