import * as React from "react";
import { Grid, Link, List } from "@mui/material";

//Style
const GridStyle = {
  backgroundColor: "#333",
  width: "91%",
  display: "flex",
  justifyContent: "center",
  height: "50px",
  borderRadius: "7px",
};

const ListStyle = {
  borderRadius: "7px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const ListItemStyle = {
  paddingX: "10",
  color: "white",
  fontSize: { md: "18px", xs: "13px" },
  textDecoration: "none",
};

//Function
export default function HeaderMenuDown() {
  return (
    <Grid sx={GridStyle}>
      <List sx={ListStyle}>
        <Link href="http://localhost:3000" sx={ListItemStyle}>
          خانه
        </Link>
        <Link href="http://localhost:3000/contact" sx={ListItemStyle}>
          تماس با ما
        </Link>
        <Link href="http://localhost:3000/about" sx={ListItemStyle}>
          ارتباط با ما
        </Link>
        <Link href="http://localhost:3000/call" sx={ListItemStyle}>
          شماره تماسها
        </Link>
        <Link href="http://localhost:3000/work" sx={ListItemStyle}>
          ساعات کاری ما
        </Link>
      </List>
    </Grid>
  );
}
