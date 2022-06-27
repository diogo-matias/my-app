import { Box, Typography, useTheme } from "@mui/material";

type IImageBox = {
  src?: string;
};

function ImageBox({ src }: IImageBox) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: "10%",
        boxSizing: "border-box",
        background: `URL(${src})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default ImageBox;
