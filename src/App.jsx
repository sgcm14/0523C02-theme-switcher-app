import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [isRedSquare, setIsRed] = useState(false);
  const [isBlackText, setIsBlack] = useState(false);

  const toggleColor = () => {
    console.log(isRedSquare);
    setIsRed(!isRedSquare);
    setIsBlack(!isBlackText);
  };

  return (
    <>
      <button onClick={toggleColor}>Cambiar Color</button>
      <Square isRedSquare={isRedSquare} isBlackText={isBlackText} />
    </>
  );
}

export default App;
