import Grid from "@mui/material/Grid";
import CustomList from "../costomList";

// const hamidArr = ["s", "sa", "sal", "sala", "salam"];
// const mojArr = ["H", "He", "Hel", "Hell", "Hello"];
const testArr = [
  "کنتاکتورها",
  "اینورترها",
  "استابلایزرها",
  "متفرقه ۱",
  "متفرقه",
];

export default function Footer() {
  //Style
  const FooterStyle = {
    opacity: ".91",
    backgroundColor: "301E67",
    height: "40vh",
    paddingTop: "20px",
    justifyContent: "space-around",
  };

  return (
    <Grid id={"test"} container style={FooterStyle}>
      <Grid>{CustomList("محصولات ما", testArr)}</Grid>
      <Grid>{CustomList("محصولات ما", testArr)}</Grid>
      <Grid>{CustomList("محصولات ما", testArr)}</Grid>
    </Grid>
  );
}
