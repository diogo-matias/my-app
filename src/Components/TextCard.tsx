import AbcIcon from "@mui/icons-material/Abc";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { Box, Typography } from "@mui/material";

type IconCard = {
  children?: string;
  title?: string;
};

function TextCard({ children, title }: any) {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight={500} textAlign="center">
          {title}
        </Typography>
        <Typography textAlign="center"> {children}</Typography>
      </Box>
    </>
  );
}

export default TextCard;
