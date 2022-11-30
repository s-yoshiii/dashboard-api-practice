import React from "react";
import { Container } from "@mui/system";
import Cards from "./features/graph/Cards/Cards";
import Chart from "./features/graph/Chart/Chart";

function App() {
  return (
    <Container maxWidth="lg">
      <Cards />
      <Chart />
    </Container>
  );
}

export default App;
