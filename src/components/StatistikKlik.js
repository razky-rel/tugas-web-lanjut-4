import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";

const StatistikKlik = () => {
  const { history } = useContext(CounterContext);
  return <p>Total aktivitas klik: {history.length}</p>;
};

export default StatistikKlik;