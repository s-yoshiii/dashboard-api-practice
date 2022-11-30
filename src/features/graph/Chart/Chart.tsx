import React from "react";
import { useSelector } from "react-redux";
import { selectDaily } from "../graphSlice";

const Chart = () => {
  const daily = useSelector(selectDaily);
  console.log(daily);
  const dates = daily.map(({ Date }) => Date);
  return <div>Chart</div>;
};

export default Chart;
