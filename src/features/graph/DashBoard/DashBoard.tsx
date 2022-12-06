import React, { FC, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { selectDaily, fetchAsyncGetDaily } from "../graphSlice";
import moment from "moment";
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
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Covid 19 Live Dashboard</Typography>
          <Typography variant="body1">
            {moment(new Date(daily[daily.length - 1].Date)).format(
              "YYYY/MM/DD"
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <SwitchCountry />
      <Cards />
      <LineChart />
      <PieChart />
    </div>
  );
};

export default DashBoard;
