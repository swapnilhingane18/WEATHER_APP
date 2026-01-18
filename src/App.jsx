import React, { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherBackground from "./WeatherBackground";

export default function App() {
  const [weatherType, setWeatherType] = useState(null);

  return (
    <>
      <WeatherBackground weatherType={weatherType} />

      <SearchBox setWeatherType={setWeatherType} />
    </>
  );
}
