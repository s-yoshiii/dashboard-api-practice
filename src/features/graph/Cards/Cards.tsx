import { Card, CardContent, Grid, Typography } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import MedicationIcon from "@mui/icons-material/Medication";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import React, { FC } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
const Cards: FC = () => {
  const daily = useSelector(selectDaily);
  return (
    <Grid container spacing={2} marginY={8}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              color="primary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CoronavirusIcon fontSize="large" sx={{ mr: 1 }} />
              Infected Persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Confirmed}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              color="primary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <MedicationIcon fontSize="large" sx={{ mr: 1 }} />
              Recovered Persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Recovered}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              color="primary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <AirlineSeatFlatIcon fontSize="large" sx={{ mr: 1 }} />
              Deaths Persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Deaths}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
