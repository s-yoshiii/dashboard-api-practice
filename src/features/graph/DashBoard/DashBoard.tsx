import React, { FC, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { selectDaily, fetchAsyncGetDaily } from "../graphSlice";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Cards from "../Cards/Cards";

import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";

const DashBoard: FC = () => {
  const dispatch = useAppDispatch();
  const daily = useSelector(selectDaily);
  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);
  return (
    <div>
      <SwitchCountry />
      <Cards />
      <LineChart />
      <PieChart />
    </div>
  );
};

export default DashBoard;
