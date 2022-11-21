import { Card, Grid } from "@mui/material";
import React, { FC } from "react";
import CountUp from "react-countup/build/CountUp";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
const Cards: FC = () => {
  const daily = useSelector(selectDaily);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>Card</Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>Card</Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>Card</Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
