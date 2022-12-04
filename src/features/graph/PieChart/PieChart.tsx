import React, { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
import { Typography } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: FC = () => {
  const daily = useSelector(selectDaily);
  const motality =
    (1000 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;
  const drawPieChart = daily[0] && (
    <Doughnut
      data={{
        labels: ["Infected", "Recoverd", "Deaths"],
        datasets: [
          {
            data: [
              daily[daily.length - 1].Confirmed,
              daily[daily.length - 1].Recovered,
              daily[daily.length - 1].Deaths,
            ],
            backgroundColor: ["#A1C298", "#C6EBC5", "#FA7070"],
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 15,
            },
          },
        },
      }}
    />
  );
  return (
    <div>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Motality {motality.toFixed(2)}[%]
      </Typography>
      {drawPieChart}
    </div>
  );
};

export default PieChart;
