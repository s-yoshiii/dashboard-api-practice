import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";

Chart.register(...registerables);
const Charta = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);
  console.log(daily);
  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((data) => new Date(data).toString()),
        datasets: [
          {
            label: "Infected",
            data: daily.map((data) => data.Confirmed),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      }}
    />
  );
  return <div>{lineChart}</div>;
};

export default Charta;
