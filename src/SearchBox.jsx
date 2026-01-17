import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import InfoBox from "./InfoBox.jsx";

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c6fba9098b53169ea56e7dc3eabeeb83";

  const getWeatherInfo = async () => {
    let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    setWeatherInfo(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getWeatherInfo();
    setCity("");
  };

  return (
    <div>
      <h3>SearchBox</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br />
        <br />

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>

      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
