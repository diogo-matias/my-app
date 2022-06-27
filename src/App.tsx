import React from "react";
import Router from "./Router";
import Home from "./pages/Home";
import StylesGlobal from "./GlobalStyle";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <StylesGlobal />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
