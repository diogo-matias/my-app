import React, { useState } from "react";
import Router from "./Router";
import StylesGlobal from "./GlobalStyle";
import { Button, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  function changeTheme() {
    if (theme !== darkTheme) {
      setTheme(darkTheme);
      return;
    }

    setTheme(lightTheme);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={changeTheme} sx={{ position: "absolute" }}>
          Change Theme
        </Button>
        <StylesGlobal />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
