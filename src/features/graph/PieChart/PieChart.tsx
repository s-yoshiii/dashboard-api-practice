import React, { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";
const PieChart: FC = () => {
  const daily = useSelector(selectDaily);
  const motality =
    (1000 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;
  console.log(motality);
  return <div>PieChart</div>;
};

export default PieChart;
