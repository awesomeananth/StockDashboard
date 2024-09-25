// import React from 'react';
// import Dashboard from './Dashboard';

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { Tabs, Tab, Box, Typography } from '@mui/material';
// import { DailyStockTab, WeeklyStockTab, MonthlyStockTab, SearchStockTab } from './tabs';

// // TabPanel component for switching between tabs
// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   // Default symbols for each tab
//   const defaultSymbols = ['MSFT', 'NVDA', 'TSLA', 'AAPL'];

//   // Tab change handler
//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <Typography variant="h4" gutterBottom>
//         Stock Dashboard
//       </Typography>

//       <Tabs value={tabIndex} onChange={handleTabChange}>
//         <Tab label="Daily Stock (MSFT)" />
//         <Tab label="Weekly Stock (NVDA)" />
//         <Tab label="Monthly Stock (TSLA)" />
//         <Tab label="Search Stock (AAPL)" />
//       </Tabs>

//       <TabPanel value={tabIndex} index={0}>
//         <DailyStockTab symbol={defaultSymbols[0]} />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={1}>
//         <WeeklyStockTab symbol={defaultSymbols[1]} />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={2}>
//         <MonthlyStockTab symbol={defaultSymbols[2]} />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={3}>
//         <SearchStockTab symbol={defaultSymbols[3]} />
//       </TabPanel>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { Tabs, Tab, Box, Typography } from "@mui/material";
// import {
//   DailyStockTab,
//   WeeklyStockTab,
//   MonthlyStockTab,
//   SearchStockTab,
// } from "./tabs";

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// };

// const App = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   const defaultSymbols = ["MSFT", "NVDA", "TSLA", "AAPL"];

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <Typography variant="h4" gutterBottom>
//         Stock Dashboard
//       </Typography>

//       <Tabs value={tabIndex} onChange={handleTabChange}>
//         <Tab label="Daily Stock (MSFT)" />
//         <Tab label="Weekly Stock (NVDA)" />
//         <Tab label="Monthly Stock (TSLA)" />
//         <Tab label="Search Stock (AAPL)" />
//       </Tabs>

//       <TabPanel value={tabIndex} index={0}>
//         <DailyStockTab symbol={defaultSymbols[0]} />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={1}>
//         <WeeklyStockTab symbol={defaultSymbols[1]} />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={2}>
//         <MonthlyStockTab symbol={defaultSymbols[2]} />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={3}>
//         <SearchStockTab symbol={defaultSymbols[3]} />
//       </TabPanel>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import {
  DailyStockTab,
  WeeklyStockTab,
  MonthlyStockTab,
  SearchStockTab,
} from "./tabs";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const defaultSymbols = ["MSFT", "NVDA", "TSLA", "AAPL"];

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Stock Dashboard
      </Typography>

      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Daily Stock (MSFT)" />
        <Tab label="Weekly Stock (NVDA)" />
        <Tab label="Monthly Stock (TSLA)" />
        <Tab label="Search Stock (AAPL)" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <DailyStockTab symbol={defaultSymbols[0]} />
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <WeeklyStockTab symbol={defaultSymbols[1]} />
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <MonthlyStockTab symbol={defaultSymbols[2]} />
      </TabPanel>

      <TabPanel value={tabIndex} index={3}>
        <SearchStockTab symbol={defaultSymbols[3]} />
      </TabPanel>
    </div>
  );
};

export default App;
