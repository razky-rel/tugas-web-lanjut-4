import React, { createContext, useState } from "react"; 
 
export const CounterContext = createContext(); 
 
export const CounterProvider = ({ children }) => { 
  const [count, setCount] = useState(0); 
  const [history, setHistory] = useState([]); 
 
  const handleJump = (n) => {
    setCount(count + n);
    setHistory([...history, count + n]);
  };

  const handleReset = () => { 
    setCount(0); 
    setHistory([]); 
  }; 
 
  return ( 
    <CounterContext.Provider value={{ count, history, reset: handleReset, jump: handleJump }}> 
      {children} 
    </CounterContext.Provider> 
  ); 
};