import Grid from "@mui/material/Grid";
import CustomList from "../costomList";

const hamidArr = ["مصی", "ابی", "اسی", "سارا"];
const mojArr = ["عرفان", "سجاد", "رضا", "سعید", "احمد"];
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
      <Grid>{CustomList("درباره ما", mojArr)}</Grid>
      <Grid>{CustomList("ارتباط با ما", hamidArr)}</Grid>
    </Grid>
  );
}
