// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
// } from "@material-ui/core";

// const CustomCard = ({ title, description, imageSrc }) => {
//   return (
//     <Card style={{ height: 300, width: 250 }}>
//       <Grid style={{ display: "flex" }}>
//         <CardMedia component="img" alt={title} image={imageSrc} />
//       </Grid>

//       <CardContent>
//         <Typography variant="h5" component="h2">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CustomCard;

const Card = ({ image, title, description }) => {
  const cardStyle = {
    width: "300px", // عرض موردنظر برای کارت
    height: "300px", // ارتفاع به اندازه محتوای داخل کارت
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={image} alt="Card" style={imageStyle} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
