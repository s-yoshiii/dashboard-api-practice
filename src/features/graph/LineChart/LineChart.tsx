import React, { FC } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
ChartJS.register(...registerables);
const LineChart: FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);
  const drawChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((data) => new Date(data).toString()),
        datasets: [
          {
            label: "Infected",
            data: daily.map((data) => data.Confirmed),
            backgroundColor: "rgba(161, 194, 152,0.8)",
            borderColor: "#A1C298",
            showLine: false,
          },
          {
            label: "Recovered",
            data: daily.map((data) => data.Recovered),
            backgroundColor: "rgba(198, 235, 197,0.8)",
            borderColor: "#C6EBC5",
            showLine: false,
          },
          {
            label: "Deaths",
            data: daily.map((data) => data.Deaths),
            backgroundColor: "rgba(250, 112, 112,0.8)",
            borderColor: "#FA7070",
            showLine: false,
          },
        ],
      }}
    />
  );
  return <div>{drawChart}</div>;
};

export default LineChart;
