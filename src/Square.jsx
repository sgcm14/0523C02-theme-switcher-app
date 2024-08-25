import "./App.css";

function Square({ isRedSquare, isBlackText }) {
  const squareClassName = `square ${
    isRedSquare ? "redBackground" : "blueBackground"
  } ${isBlackText ? "blackText" : "whiteText"}`;

  return (
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
      className={squareClassName}
    >
      Cuadrado {isRedSquare ? "rojo" : "azul"}
      <br />
      con texto {isBlackText ? "negro" : "blanco"}
    </div>
  );
}

export default Square;
