import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid, ListItem, List } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useState, useEffect } from "react";
import Search from "./search";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//input list
const menuList = ["کنتاکتورها", "اینورترها", "استابلایزرها", "متفرقه"];

export default function HeaderMenuPc() {
  //LiveControl
  const [navColor, setnavColor] = useState("white");
  const [navHeight, setnavHeight] = useState("5rem");
  const [navBackgroundcolor, setnavBackgroundcolor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavBackgroundcolor("white")
      : setnavBackgroundcolor("transparent");
    window.scrollY > 10 ? setnavHeight("4rem") : setnavHeight("5rem");
    window.scrollY > 10 ? setnavColor("black") : setnavColor("white");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  //Style
  const GridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const ListStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const GridStyle = {
    paddingLeft: "100px",
    paddingRight: "100px",
    backgroundColor: navBackgroundcolor,
    transition: "all 1s",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    color: navColor,
    height: navHeight,
  };

  return (
    <Grid container style={GridStyle}>
      <Grid id="headerlist" item style={GridItemStyle}>
        <List style={ListStyle}>
          {menuList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ChevronLeftIcon />
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid id="search" item style={GridItemStyle}>
        <Search />
      </Grid>
      <Grid id="icon" item style={GridItemStyle}>
        <InboxIcon />
      </Grid>
    </Grid>
  );
}
