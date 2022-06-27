import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "30vh",
        padding: "0 100px",
      }}
    >
      <div>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="">About</a>
          <a href="">Contato</a>
          <a href="">Produtos</a>
          <a href="">Habilidades</a>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          eaque
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <FacebookIcon cursor="pointer" />
        <TwitterIcon cursor="pointer" />
        <InstagramIcon cursor="pointer" />
      </div>
    </div>
  );
}

export default Footer;
