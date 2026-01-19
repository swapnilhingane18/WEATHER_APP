import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InfoBox from "./InfoBox";
import "./SearchBox.css";

export default function SearchBox({ setWeatherType }) {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const getWeatherInfo = async () => {
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    setWeatherInfo(data);
    setWeatherType(data.weather[0].main);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherInfo();
    setCity("");
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      <h3>SearchBox</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br /><br />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>

      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
