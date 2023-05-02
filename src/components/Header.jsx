import Grid from "@mui/material/Grid";
import HeaderMenu from "./HeaderMenu/headerMenu";
import Menu from "./menu";

//Style
const HeaderStyle = {
  backgroundImage: "linear-gradient(-45deg , #0c9ed4 0% , #51c9f5 100%)",
  height: { md: "60vh", xs: "30vh" },
  display: "grid",
};

const GridStyle = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  paddingTop: "50px",
  fontSize: "50px",
};

//Function
export default function Header() {
  return (
    <>
      <Grid container sx={HeaderStyle}>
        <Grid item>
          <HeaderMenu />
        </Grid>
        <Grid sx={GridStyle} item>
          برق شهر
        </Grid>
        <Grid sx={GridStyle} item>
          <Menu />
        </Grid>
      </Grid>
    </>
  );
}
