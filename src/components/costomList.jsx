import Grid from "@mui/material/Grid";

export default function CustomList(headline, items) {
  //Styles
  const ListStyle = {
    color: "white",
    opacity: ".8",
  };

  const HeadLineStyle = {
    color: "white",
    fontWeight: "bold",
    paddingBottom: "10px",
    fontSize: "20px",
  };

  const listItems = items.map((number, index) => (
    <Grid key={index}>{number}</Grid>
  ));
  return (
    <>
      <Grid item style={HeadLineStyle}>
        {headline}
      </Grid>
      <Grid item style={ListStyle}>
        {listItems}
      </Grid>
    </>
  );
}
