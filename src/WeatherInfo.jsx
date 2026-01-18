import React from "react";
import Typography from "@mui/material/Typography";

export default function WeatherInfo({ weatherInfo }) {
  if (!weatherInfo) return null;

  return (
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      🌡 Temperature: {weatherInfo.main.temp} °C <br />
      🤒 Feels Like: {weatherInfo.main.feels_like} °C <br />
      ☁ Weather: {weatherInfo.weather[0].main} <br />
      💨 Wind Speed: {weatherInfo.wind.speed} m/s
    </Typography>
  );
}
