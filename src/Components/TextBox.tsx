import { Box, Typography, useTheme } from "@mui/material";

type ITextBox = {
  children?: string;
  title?: string;
};

function TextBox({ children, title }: ITextBox) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "500px",
        width: "500px",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: "2%",
        paddingTop: "5%",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h4" fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}

export default TextBox;
