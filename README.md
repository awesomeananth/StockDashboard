
# Stock Dashboard

## Overview

The **Stock Dashboard** application allows users to view stock data from various timeframes (daily, weekly, monthly) and a search feature using Alpha Vantage API. The frontend is built with **React** and **Material UI**, while the backend is developed using **Node.js** and **Express**. It supports fallback data in case of API rate limits.

## Table of Contents

1. [Frontend](#frontend)
   - [Features](#features)
   - [Installation](#installation)
   - [Available Scripts](#available-scripts)
   - [Usage](#usage)
2. [Backend](#backend)
   - [Installation](#installation-1)
   - [Environment Variables](#environment-variables)
   - [Available Scripts](#available-scripts-1)
   - [API Endpoints](#api-endpoints)
   - [Usage](#usage-1)

---

## Frontend

### Features

- Display stock data for daily, weekly, and monthly timeframes.
- Search for stock data using a stock symbol.
- Fallback sample data in case of API rate limits.
- Data visualization using charts and tables.
- Responsive UI built with **Material UI** and **Recharts**.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend
```

2. Install the dependencies:

```bash
npm install
```

### Available Scripts

In the `frontend` directory, you can run the following commands:

#### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run build`

Builds the app for production to the `build` folder.

### Usage

Once the frontend is running, you will have access to the following features:

- **Daily Stock Data**: View the daily prices for a stock symbol like `MSFT` with charts and tables.
- **Weekly Stock Data**: Compare weekly stock data for symbols like `NVDA`.
- **Monthly Stock Data**: Visualize monthly data comparison for symbols like `TSLA`.
- **Search Stock**: Search for a stock by symbol (e.g., `AAPL`) and view its data as cards.

The application will switch to fallback data if the API rate limit is exceeded.

---

## Backend

### Features

- Fetches stock data using Alpha Vantage API for Daily, Weekly, Monthly, and Search endpoints.
- Supports fallback data in case of API rate limits.
- Built with **Node.js** and **Express**.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd backend
```

2. Install the dependencies:

```bash
npm install
```

### Environment Variables

The backend requires an API key for Alpha Vantage. Create a `.env` file in the root of the `backend` folder with the following content:

```bash
ALPHA_VANTAGE_API_KEY=your_alphavantage_api_key
```

### Available Scripts

In the `backend` directory, you can run the following commands:

#### `npm start`

Runs the Express server at [http://localhost:3001](http://localhost:3001).

### API Endpoints

The backend exposes the following endpoints to fetch stock data:

- **GET `/api/daily/:symbol`**: Fetch daily stock data for the given symbol.
- **GET `/api/weekly/:symbol`**: Fetch weekly stock data for the given symbol.
- **GET `/api/monthly/:symbol`**: Fetch monthly stock data for the given symbol.
- **GET `/api/stock/:symbol`**: Search for stock data using the stock symbol.

If the API rate limit is hit, the backend will respond with fallback sample data.

### Usage

1. Start the backend server by running:

```bash
npm start
```

2. The backend will be available at `http://localhost:3001`.

---

### Example Request and Response

**Example Request**:

```bash
GET /api/daily/MSFT
```

**Example Response** (simplified):

```json
{
  "Meta Data": {
    "1. Information": "Daily Prices",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2024-09-24",
    "5. Time Zone": "US/Eastern"
  },
  "Time Series (Daily)": {
    "2024-09-24": {
      "1. open": "123.45",
      "2. high": "125.67",
      "3. low": "120.89",
      "4. close": "124.56",
      "5. volume": "1000000"
    }
  }
}
```

---

With the **Stock Dashboard** application, you can easily track stock data in various timeframes with a clean UI and graceful fallback handling for API limits.
