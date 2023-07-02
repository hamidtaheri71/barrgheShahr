import Grid from "@mui/material/Grid";

export default function CustomList(headline, items) {
  //Style
  const ListStyle = {
    color: "white",
    position: "relative",
    top: "40px",
    opacity: ".8",
  };

  const HeadLineStyle = {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    borderBottom: "solid",
  };

  const listItems = items.map((number, index) => (
    <Grid key={index}>{number}</Grid>
  ));
  return (
    <Grid container>
      <Grid item style={HeadLineStyle}>
        {headline}
      </Grid>
      <Grid item style={ListStyle}>
        {listItems}
      </Grid>
    </Grid>
  );
}
