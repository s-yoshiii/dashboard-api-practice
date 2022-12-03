import React, { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
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
    />
  );
  return <div>{drawPieChart}</div>;
};

export default PieChart;
