import { useState } from "react";
import "./App.css";

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
      <div
        // style={{
        //   width: "400px",
        //   height: "400px",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   lineHeight: "30px",
        //   fontSize: "1.5em",
        //   backgroundColor: isRedSquare ? "red" : "blue",
        //   color: isBlackText ? "black" : "white",
        // }}
        className={`square ${isRedSquare ? "redBackground" : "blueBackground"} ${isBlackText ? "blackText" : "whiteText"}`}
      >
        Cuadrado {isRedSquare ? "rojo" : "azul"}
        <br />
        con texto {isBlackText ? "negro" : "blanco"}
      </div>
    </>
  );
}

export default App;
