import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BlurOnIcon from "@mui/icons-material/BlurOn";

export default function WeatherIcon({ weatherType }) {
  if (weatherType === "Clear") return <WbSunnyIcon />;
  if (weatherType === "Clouds") return <CloudIcon />;
  if (weatherType === "Rain" || weatherType === "Drizzle") return <WaterDropIcon />;
  if (weatherType === "Snow") return <AcUnitIcon />;
  if (weatherType === "Thunderstorm") return <ThunderstormIcon />;
  if (weatherType === "Mist" || weatherType === "Fog") return <BlurOnIcon />;

  return null;
}
