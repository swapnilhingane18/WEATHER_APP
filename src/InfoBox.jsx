import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import WeatherInfo from "./WeatherInfo";

export default function InfoBox({ weatherInfo }) {
    if (!weatherInfo) return null;

let weatherType = weatherInfo.weather[0].main;
let imageURL = "https://images.unsplash.com/photo-1601962986711-21760faddd7f?w=600&auto=format&fit=crop&q=60";

if (weatherType === "Clouds") {
  imageURL = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkfGVufDB8fDB8fHww";
} else if (weatherType === "Clear") {
  imageURL = "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww";
} else if (weatherType === "Rain" || weatherType === "Drizzle") {
  imageURL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
} else if (weatherType === "Snow") {
  imageURL = "https://plus.unsplash.com/premium_photo-1670106817708-a914a1634370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMHNreXxlbnwwfHwwfHx8MA%3D%3D";
} else if (weatherType === "Thunderstorm") {
  imageURL = "https://images.unsplash.com/photo-1507607422988-9a1b54b0c3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRodW5kZXJ3YW5kJTIwc2t5fGVufDB8fDB8fHww";
}
  

  if (!weatherInfo) return null;

  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={INIT_URL} alt="weather" />

        <CardContent>
          <Typography gutterBottom variant="h5">
            Weather in {weatherInfo.name}
          </Typography>

          {/* ✅ Separate weather component */}
          <WeatherInfo weatherInfo={weatherInfo} />
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
