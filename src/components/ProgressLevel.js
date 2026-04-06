import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";

const ProgressLevel = () => {
  const { count } = useContext(CounterContext);
  const progress = Math.min(count, 100);
  return (
    <div style={{ width: "200px", height: "10px", backgroundColor: "#eee", borderRadius: "5px" }}>
      <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "blue", borderRadius: "5px" }}></div>
      <small>Progres: {progress}%</small>
    </div>
  );
};

export default ProgressLevel;