import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";

const StatusAngka = () => {
  const { count } = useContext(CounterContext);
  const isGenap = count % 2 === 0;
  return (
    <p>Status Angka: <span style={{ color: isGenap ? "green" : "red", fontWeight: "bold" }}>
      {isGenap ? "GENAP" : "GANJIL"}
    </span></p>
  );
};
export default StatusAngka;