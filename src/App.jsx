import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ArrayState } from "./components/ArrayState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ArrayState></ArrayState>
    </>
  );
}

export default App;
