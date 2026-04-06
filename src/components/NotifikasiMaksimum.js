import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";

const NotifikasiMaksimum = () => {
  const { count } = useContext(CounterContext);
  if (count <= 100) return null;
  return (
    <div style={{ marginTop: "20px", color: "darkred", fontWeight: "bold" }}>
      Peringatan: Angka sudah mencapai {count} (Lebih dari 50!)
    </div>
  );
};

export default NotifikasiMaksimum;