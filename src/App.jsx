import React, { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherBackground from "./WeatherBackground";
import WeatherParticles from "./WeatherParticles";
import EffectToggle from "./EffectToggle";

export default function App() {
  const [weatherType, setWeatherType] = useState(null);
  const [effectsOn, setEffectsOn] = useState(true);

  return (
    <>
      <WeatherBackground weatherType={weatherType} />

      {effectsOn && (
        <>
          <WeatherParticles weatherType={weatherType} />
        </>
      )}

      <EffectToggle effectsOn={effectsOn} setEffectsOn={setEffectsOn} />
      <SearchBox setWeatherType={setWeatherType} />
    </>
  );
}
