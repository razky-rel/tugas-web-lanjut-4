import React from "react";
import { CounterProvider } from "./context/HitungContext";

import StatusAngka from "./components/StatusAngka";
import TombolAksiCustom from "./components/TombolAksiCustom";
import StatistikKlik from "./components/StatistikKlik";
import ProgressLevel from "./components/ProgressLevel";
import NotifikasiMaksimum from "./components/NotifikasiMaksimum";
import ResetButton from "./components/ResetButton"; 

function App() {
  return (
    <CounterProvider>
      <div style={{ padding: "20px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
        <h1>Aplikasi Counter Global State</h1>
        <hr />

        <StatusAngka />
        <ProgressLevel />
        <NotifikasiMaksimum />
        
        <div style={{ marginTop: "20px" }}>
          <TombolAksiCustom />
          <ResetButton /> 
        </div>

        <hr />
        <StatistikKlik />
      </div>
    </CounterProvider>
  );
}

export default App;