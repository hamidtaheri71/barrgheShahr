import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Customcard({ title, description, imageSrc }) {
  return (
    <Card style={{ margin: "30px" }}>
      <CardActionArea style={{ width: "200", height: "300" }}>
        <CardMedia
          style={{ objectFit: "contain" }}
          component="img"
          height="200"
          width="200"
          image={imageSrc}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
