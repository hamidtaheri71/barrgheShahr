import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Search from "./search";

const menuList = ["کنتاکتورها", "اینورترها", "استابلایزرها", "متفرقه"];

export default function HeaderMenuPhone() {
  //LiveStyle
  const [navColor, setnavColor] = useState("white");
  const [navBackgroundcolor, setnavBackgroundcolor] = useState("transparent");
  const [navHeight, setnavHeight] = useState("5rem");
  // const [navPaddMobile, setnavPaddMobile] = useState("30px");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavBackgroundcolor("white")
      : setnavBackgroundcolor("transparent");
    window.scrollY > 10 ? setnavColor("black") : setnavColor("white");
    window.scrollY > 10 ? setnavHeight("4rem") : setnavHeight("5rem");
    // window.scrollY > 10 ? setnavPaddMobile("30px") : setnavPaddMobile("10px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100vw",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid sx={MenuStyle}>
        <img
          style={{ width: 35, height: 35 }}
          alt=""
          src={require("../../images/logo.jpg")}
        />
        <CloseIcon />
      </Grid>
      <Divider />
      <Grid sx={{ textAlignLast: "end" }}>
        {menuList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Grid>
    </Box>
  );

  //Style
  const MenuStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    alignContent: "center",
    alignItems: "center",
  };

  const GridItemStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: navColor,
    alignItems: "center",
  };

  const GridStyle = {
    backgroundColor: navBackgroundcolor,
    transition: "all 1s",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    height: navHeight,
    // paddingLeft: navPaddMobile,
    // paddingRight: navPaddMobile,
  };

  return (
    <Grid container sx={GridStyle}>
      <Grid item sx={GridItemStyle}>
        {["منو"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              sx={{ color: navColor, fontSize: "20px" }}
              onClick={toggleDrawer(anchor, true)}
            >
              {anchor}
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </Grid>
      <Grid item sx={GridItemStyle}>
        <Search />
      </Grid>
      <Grid item sx={GridItemStyle}>
        <img
          style={{ width: 35, height: 35 }}
          alt=""
          src={require("../../images/logo.jpg")}
        />
      </Grid>
    </Grid>
  );
}
