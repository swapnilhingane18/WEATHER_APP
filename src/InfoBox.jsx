import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import "./InfoBox.css";


export default function InfoBox({ weatherInfo }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601962986711-21760faddd7f?w=600&auto=format&fit=crop&q=60";

  if (!weatherInfo) return null;

  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={INIT_URL}
          alt="weather"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            Weather in {weatherInfo.name}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            🌡 Temperature: {weatherInfo.main.temp} °C <br />
            🤒 Feels Like: {weatherInfo.main.feels_like} °C <br />
            ☁ Weather: {weatherInfo.weather[0].main} <br />
            💨 Wind Speed: {weatherInfo.wind.speed} m/s
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
