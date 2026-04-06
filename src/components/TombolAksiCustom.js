import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";

const TombolAksiCustom = () => {
  const { jump } = useContext(CounterContext);
  return (
    <div style={{ marginBottom: "10px", marginTop: "20px" }}>
      <button onClick={() => jump(1)}>Tambah +1</button>    
      <button onClick={() => jump(10)} style={{ marginLeft: "10px" }}>Tambah +10</button>
      <button onClick={() => jump(50)} style={{ marginLeft: "10px" }}>Tambah +50</button>
    </div>
  );
};

export default TombolAksiCustom;