import Button from "@mui/material/Button";

export default function EffectToggle({ effectsOn, setEffectsOn }) {
  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 10 }}>
      <Button
        variant="contained"
        color={effectsOn ? "success" : "error"}
        onClick={() => setEffectsOn(!effectsOn)}
      >
        {effectsOn ? "Effects ON" : "Effects OFF"}
      </Button>
    </div>
  );
}
