import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import { Grid, List } from "@mui/material";

const menuList = ["تماس با ما", "ارتباط با ما", "درباره ما", "ساعت کاری"];

//Style
const GridStyle = {
  backgroundColor: "#333",
  width: "80%",
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
};

//Function
export default function HeaderMenuDown() {
  return (
    <Grid sx={GridStyle}>
      <List sx={ListStyle}>
        {menuList.map((text, index) => (
          <ListItemText primary={text} sx={ListItemStyle} />
        ))}
      </List>
    </Grid>
  );
}
