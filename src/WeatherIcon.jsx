import React from "react";

export default function WeatherIcon({ weatherType }) {
  const ICONS = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌫️",
  };

  return <span style={{ fontSize: "26px", marginRight: "6px" }}>{ICONS[weatherType] || "🌍"}</span>;
}
