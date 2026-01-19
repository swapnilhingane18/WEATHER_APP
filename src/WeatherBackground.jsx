import React from "react";

export default function WeatherBackground({ weatherType }) {
  const GRADIENT_MAP = {
    Clear:
      "linear-gradient(-45deg, #fceabb, #f8b500, #f6d365, #fda085)",

    Clouds:
      "linear-gradient(-45deg, #d7d2cc, #304352, #bdc3c7, #2c3e50)",

    Rain:
      "linear-gradient(-45deg, #4b79a1, #283e51, #1e3c72, #2a5298)",

    Drizzle:
      "linear-gradient(-45deg, #4b79a1, #283e51, #1e3c72, #2a5298)",

    Snow:
      "linear-gradient(-45deg, #e6dada, #ffffff, #dfe9f3, #ffffff)",

    Thunderstorm:
      "linear-gradient(-45deg, #232526, #414345, #000000, #434343)",

    Mist:
      "linear-gradient(-45deg, #bdc3c7, #2c3e50, #95a5a6, #7f8c8d)",

    Fog:
      "linear-gradient(-45deg, #bdc3c7, #2c3e50, #95a5a6, #7f8c8d)",

    Haze:
      "linear-gradient(-45deg, #bdc3c7, #2c3e50, #95a5a6, #7f8c8d)",
  };

  const gradient =
    GRADIENT_MAP[weatherType] ||
    "linear-gradient(-45deg, #bdc3c7, #2c3e50, #bdc3c7, #2c3e50)";

  return (
    <div
      className={weatherType === "Clouds" ? "wind" : ""}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: gradient,
        backgroundSize: "400% 400%",
        animation: "gradientBG 12s ease infinite",
      }}
    />

  );
}
