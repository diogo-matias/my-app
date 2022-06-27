import { Box, Grid } from "@mui/material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import TextCard from "./TextCard";

function IconSection() {
  return (
    <>
      <Grid
        container
        sx={{ height: "70vh", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DesktopWindowsIcon style={{ fontSize: "100px" }} />
            <TextCard title="React Icons">Landing page React</TextCard>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DesktopWindowsIcon style={{ fontSize: "100px" }} />
            <TextCard title="React Icons">Landing page React</TextCard>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DesktopWindowsIcon style={{ fontSize: "100px" }} />
            <TextCard title="React Icons">Landing page React</TextCard>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default IconSection;
