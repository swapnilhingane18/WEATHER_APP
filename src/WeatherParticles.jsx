import React from "react";
import "./WeatherParticles.css";

export default function WeatherParticles({ weatherType }) {
  const randomStyle = () => ({
    left: Math.random() * 100 + "vw",
    animationDuration: Math.random() * 2 + 1 + "s",
    animationDelay: Math.random() * 2 + "s",
  });

  return (
    <>
      {(weatherType === "Rain" ||
        weatherType === "Drizzle" ||
        weatherType === "Thunderstorm") && (
        <div className="rain">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="drop" style={randomStyle()} />
          ))}
        </div>
      )}

      {weatherType === "Snow" && (
        <div className="snow">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flake" style={randomStyle()} />
          ))}
        </div>
      )}

      {weatherType === "Thunderstorm" && <div className="lightning" />}
    </>
  );
}
