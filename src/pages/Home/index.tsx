import TextBox from "../../Components/TextBox";
import ImageBox from "../../Components/ImageBox";
import { Box, Grid } from "@mui/material";
import Cover from "../../Components/Cover";
import TextCard from "../../Components/TextCard";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import Footer from "../../Components/Footer";
import IconSection from "../../Components/IconsSection";

function Home() {
  return (
    <>
      <Cover
        variant="h2"
        title="Página React"
        h="70vh"
        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2771305-luz-roxo-rosa-gradiente-desfoque-fundo-vetor.jpg"
      />

      <IconSection />

      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextBox title="Titulo Box">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint amet
            nemo sapiente iste magnam hic quisquam reprehenderit eius, deserunt
            accusamus commodi eos qui? Quia voluptatum harum hic nostrum nisi
            rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            suscipit velit beatae repellat assumenda nobis nemo praesentium fuga
            ut amet rerum veniam nam vitae, sapiente debitis perspiciatis unde!
            Sed, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita nesciunt, ut fugiat voluptatibus sequi itaque quasi
            recusandae distinctio commodi nulla quia quae rem dicta ipsum ex
            molestias aliquid minus vel.
          </TextBox>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageBox src="https://quatrorodas.abril.com.br/wp-content/uploads/2019/02/dc5aeab5-ferrari-f8-tributo-1.jpg"></ImageBox>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageBox src="https://escoladainteligencia.com.br/wp-content/uploads/2019/04/282148-revisor-entregar-ate-hoje-ate-15-horas-governanca-corporativa-e-gestao-escolar-entenda-essa-relacao-1.jpg"></ImageBox>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextBox title="Titulo Box">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint amet
            nemo sapiente iste magnam hic quisquam reprehenderit eius, deserunt
            accusamus commodi eos qui? Quia voluptatum harum hic nostrum nisi
            rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            suscipit velit beatae repellat assumenda nobis nemo praesentium fuga
            ut amet rerum veniam nam vitae, sapiente debitis perspiciatis unde!
            Sed, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita nesciunt, ut fugiat voluptatibus sequi itaque quasi
            recusandae distinctio commodi nulla quia quae rem dicta ipsum ex
            molestias aliquid minus vel. lorem
          </TextBox>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextBox title="Titulo Box">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint amet
            nemo sapiente iste magnam hic quisquam reprehenderit eius, deserunt
            accusamus commodi eos qui? Quia voluptatum harum hic nostrum nisi
            rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            suscipit velit beatae repellat assumenda nobis nemo praesentium fuga
            ut amet rerum veniam nam vitae, sapiente debitis perspiciatis unde!
            Sed, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita nesciunt, ut fugiat voluptatibus sequi itaque quasi
            recusandae distinctio commodi nulla quia quae rem dicta ipsum ex
            molestias aliquid minus vel.
          </TextBox>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageBox src="https://cdn.pixabay.com/photo/2017/08/10/04/30/ipad-2618187_960_720.jpg"></ImageBox>
        </Grid>
      </Grid>

      <Cover
        title="Contato"
        variant="h4"
        h="20vh"
        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2771305-luz-roxo-rosa-gradiente-desfoque-fundo-vetor.jpg"
      />

      <Footer />
    </>
  );
}

export default Home;
