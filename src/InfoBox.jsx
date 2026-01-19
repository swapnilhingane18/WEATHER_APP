import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import html2canvas from "html2canvas";

import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";

export default function InfoBox({ weatherInfo }) {
  if (!weatherInfo) return null;

  const cardRef = useRef(null);
  const weatherType = weatherInfo.weather[0].main;

  /* ---------- IMAGE MAP ---------- */
  const IMAGE_MAP = {
    Clear: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665",
    Clouds: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31",
    Rain: "https://images.unsplash.com/photo-1428592953211-077101b2021b",
    Drizzle: "https://images.unsplash.com/photo-1428592953211-077101b2021b",
    Snow: "https://images.unsplash.com/photo-1608889175250-c3b0c1667d02",
    Thunderstorm: "https://images.unsplash.com/photo-1507607422988-9a1b54b0c3d8",
    Mist: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    Fog: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    Haze: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  };

  const imageURL =
    IMAGE_MAP[weatherType] ||
    "https://images.unsplash.com/photo-1601962986711-21760faddd7f";

  /* ---------- TEXT SHARE ---------- */
  const handleShare = async () => {
    const text = `
🌤 Weather in ${weatherInfo.name}
🌡 Temp: ${weatherInfo.main.temp} °C
🤒 Feels Like: ${weatherInfo.main.feels_like} °C
☁ Weather: ${weatherType}
💨 Wind: ${weatherInfo.wind.speed} m/s
    `;

    if (navigator.share) {
      await navigator.share({
        title: `Weather in ${weatherInfo.name}`,
        text,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Weather copied to clipboard!");
    }
  };

  /* ---------- SCREENSHOT SHARE 📸 ---------- */
  const handleScreenshot = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
    });

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], "weather.png", { type: "image/png" });

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Weather Report",
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "weather.png";
        link.click();
      }
    });
  };

  /* ---------- UI ---------- */
  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: 345,
        margin: "30px auto",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        color: "#fff",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="160" image={imageURL} alt="weather" />

        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            <WeatherIcon weatherType={weatherType} /> Weather in{" "}
            {weatherInfo.name}
          </Typography>

          <WeatherInfo weatherInfo={weatherInfo} />
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          onClick={handleShare}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          Share Text
        </Button>

        <Button
          variant="outlined"
          onClick={handleScreenshot}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          Screenshot 📸
        </Button>
      </CardActions>
    </Card>
  );
}
