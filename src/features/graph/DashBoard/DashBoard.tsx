import React, { FC, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Stack,
} from "@mui/material";
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
          <Container maxWidth="lg">
            <Stack
              direction={{ md: "row" }}
              justifyContent={{ md: "space-between" }}
              alignItems={{ md: "center" }}
              spacing={1}
            >
              <Typography variant="h6">Covid 19 Live Dashboard</Typography>
              <Typography variant="body1" align="right">
                {moment(new Date(daily[daily.length - 1].Date)).format(
                  "YYYY/MM/DD"
                )}
              </Typography>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ py: 10 }}>
        <Grid item xs={12}>
          <SwitchCountry />
        </Grid>
        <Grid item xs={12}>
          <Cards />
        </Grid>
        <Grid item xs={12} md={8}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={4} sx={{ md: { mt: -5 } }}>
          <PieChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
