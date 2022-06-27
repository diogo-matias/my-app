import { GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function StylesGlobal() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        HTML: {
          fontFamily: "Roboto",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          // backgroundColor: "red",
        },

        a: {
          textDecoration: "none",
          color: theme.palette.primary.main,
          fontWeight: "500",
        },
      }}
    />
  );
}

export default StylesGlobal;
