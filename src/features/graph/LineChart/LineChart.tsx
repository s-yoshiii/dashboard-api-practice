import React, { FC } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
ChartJS.register(...registerables);
const LineChart: FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);
  const drawChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((data) => moment(new Date(data)).format("MM/DD")),
        datasets: [
          {
            label: "Infected",
            data: daily.map((data) => data.Confirmed),
            backgroundColor: "rgba(161, 194, 152,0.4)",
            borderColor: "#A1C298",
            showLine: false,
            fill: true,
          },
          {
            label: "Recovered",
            data: daily.map((data) => data.Recovered),
            backgroundColor: "rgba(198, 235, 197,0.4)",
            borderColor: "#C6EBC5",
            showLine: false,
            fill: true,
          },
          {
            label: "Deaths",
            data: daily.map((data) => data.Deaths),
            backgroundColor: "rgba(250, 112, 112,0.4)",
            borderColor: "#FA7070",
            showLine: false,
            fill: true,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
        },
      }}
    />
  );
  return <div>{drawChart}</div>;
};

export default LineChart;
