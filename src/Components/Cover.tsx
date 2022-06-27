import { Container, Typography } from "@mui/material";

{
  /* backgroundCover -> h -> url-> title */
}

type cover = {
  src?: string;
  h?: string;
  title?: string;
  variant: string;
};

function Cover({ src, h, title, variant }: cover) {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          background: `URL(${src})`,
          height: `${h}`,
          backgroundSize: "cover",
          color: "#eeee",
        }}
      >
        <Typography variant="h3" fontWeight={500}>
          {title}
        </Typography>
      </Container>
    </>
  );
}

export default Cover;
