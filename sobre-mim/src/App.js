import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Routs from './routs/Routs'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routs/>
    </ThemeProvider>
  );
}

export default App;