import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const SearchCard = ({ data }) => {
  const renderStockData = (obj) => {
    return Object.keys(obj).map((key, index) => (
      <Grid item key={index} xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">{key}</Typography>
            <Typography>{obj[key]}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return <Grid container spacing={3}>{renderStockData(data)}</Grid>;
};

export default SearchCard;
