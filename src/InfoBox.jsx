import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";


export default function InfoBox({ weatherInfo }) {
  if (!weatherInfo) return null;

  let weatherType = weatherInfo.weather[0].main;

  let imageURL =
    "https://images.unsplash.com/photo-1601962986711-21760faddd7f?w=600&auto=format&fit=crop&q=60";

  if (weatherType === "Clear") {
    imageURL =
      "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=600&auto=format&fit=crop&q=60";
  } else if (weatherType === "Clouds") {
    imageURL =
      "https://plus.unsplash.com/premium_photo-1674834298045-e405bc99076b?w=600&auto=format&fit=crop&q=60";
  } else if (weatherType === "Rain" || weatherType === "Drizzle") {
    imageURL =
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&auto=format&fit=crop&q=60";
  } else if (weatherType === "Snow") {
    imageURL =
      "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=600&auto=format&fit=crop&q=60";
  } else if (weatherType === "Thunderstorm") {
    imageURL =
      "https://plus.unsplash.com/premium_photo-1726818265070-c08eb719d77c?w=600&auto=format&fit=crop&q=60";
  } else if (
    weatherType === "Mist" ||
    weatherType === "Fog" ||
    weatherType === "Haze" ||
    weatherType === "Smoke" ||
    weatherType === "Dust" ||
    weatherType === "Sand" ||
    weatherType === "Ash"
  ) {
    imageURL =
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60";
  } else if (weatherType === "Squall" || weatherType === "Tornado") {
    imageURL =
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60";
  }



  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardActionArea>
        {/* ✅ USE imageURL */}
        <CardMedia component="img" height="140" image={imageURL} alt="weather" />

        <CardContent>
          <Typography gutterBottom variant="h5">
            <WeatherIcon weatherType={weatherInfo.weather[0].main} />
            Weather in {weatherInfo.name}
          </Typography>

          <WeatherInfo weatherInfo={weatherInfo} />
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
