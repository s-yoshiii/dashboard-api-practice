import React from "react";
import { Container } from "@mui/system";
import Cards from "./features/graph/Cards/Cards";
import LineChart from "./features/graph/LineChart/LineChart";
import PieChart from "./features/graph/PieChart/PieChart";

function App() {
  return (
    <Container maxWidth="lg">
      <Cards />
      <LineChart />
      <PieChart />
    </Container>
  );
}

export default App;
