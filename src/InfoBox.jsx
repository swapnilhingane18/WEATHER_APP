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

  /* ---------------- WEATHER TYPE ---------------- */
  const weatherType = weatherInfo.weather[0].main;

  /* ---------------- IMAGE URLS ---------------- */
  const IMAGE_MAP = {
    Clear:
      "https://plus.unsplash.com/premium_photo-1727730047398-49766e915c1d?w=600&auto=format&fit=crop&q=60",

    Clouds:
      "https://plus.unsplash.com/premium_photo-1674834298045-e405bc99076b?w=600&auto=format&fit=crop&q=60",

    Rain:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&auto=format&fit=crop&q=60",

    Drizzle:
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&auto=format&fit=crop&q=60",

    Snow:
      "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=600&auto=format&fit=crop&q=60",

    Thunderstorm:
      "https://plus.unsplash.com/premium_photo-1726818265070-c08eb719d77c?w=600&auto=format&fit=crop&q=60",

    Mist:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Fog:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Haze:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Smoke:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Dust:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Sand:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Ash:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60",

    Squall:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60",

    Tornado:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60",
  };

  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1601962986711-21760faddd7f?w=600&auto=format&fit=crop&q=60";

  const imageURL = IMAGE_MAP[weatherType] || DEFAULT_IMAGE;

  /* ---------------- BACKGROUND GRADIENT ---------------- */
  const GRADIENT_MAP = {
    Clear: "linear-gradient(to right, #fceabb, #f8b500)",
    Clouds: "linear-gradient(to right, #d7d2cc, #304352)",
    Rain: "linear-gradient(to right, #4b79a1, #283e51)",
    Drizzle: "linear-gradient(to right, #4b79a1, #283e51)",
    Snow: "linear-gradient(to right, #e6dada, #274046)",
    Thunderstorm: "linear-gradient(to right, #232526, #414345)",
    Mist: "linear-gradient(to right, #bdc3c7, #2c3e50)",
    Fog: "linear-gradient(to right, #bdc3c7, #2c3e50)",
    Haze: "linear-gradient(to right, #bdc3c7, #2c3e50)",
  };

  const backgroundStyle = {
    background:
      GRADIENT_MAP[weatherType] ||
      "linear-gradient(to right, #bdc3c7, #2c3e50)",
    color: "#fff",
    transition: "all 0.6s ease",
  };

  /* ---------------- UI ---------------- */
  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }} style={backgroundStyle}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageURL} alt="weather" />

        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
            <WeatherIcon weatherType={weatherType} /> Weather in{" "}
            {weatherInfo.name}
          </Typography>

          <WeatherInfo weatherInfo={weatherInfo} />
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" sx={{ color: "#fff" }}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
