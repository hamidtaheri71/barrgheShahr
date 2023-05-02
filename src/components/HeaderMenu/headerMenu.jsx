import * as React from "react";
import { Grid } from "@mui/material";
import HeaderMenuPhone from "./headerMenuPhone";
import HeaderMenuPc from "./headerMenuPc";

export default function HeaderMenu() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%wp",
        transition: "all 1s",
        position: "fixed",
        top: "0",
      }}
    >
      <Grid item sx={{ display: { md: "block", xs: "none" } }}>
        <HeaderMenuPc />
      </Grid>
      <Grid item sx={{ display: { xs: "block", md: "none" } }}>
        <HeaderMenuPhone />
      </Grid>
    </Grid>
  );
}
