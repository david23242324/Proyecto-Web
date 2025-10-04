import { useState } from "react";
import Button from "./Button";

const Calculadora = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState("");
  const [fase, setFase] = useState("valor1");

  const inputNumber = (num) => {
    if (fase === "valor1") {
      setValor1(valor1 + num);
    } else {
      setValor2(valor2 + num);
    }
  };

  const elegirOperacion = (op) => {
    if (valor1 !== "") {
      setOperador(op);
      setFase("valor2");
    }
  };

  const calcular = () => {
    let res = 0;
    const n1 = parseFloat(valor1);
    const n2 = parseFloat(valor2);

    if (isNaN(n1) || isNaN(n2)) return;

    if (operador === "+") {
      res = n1 + n2;
    } else if (operador === "-") {
      res = n1 - n2;
    } else if (operador === "*") {
      res = n1 * n2;
    } else if (operador === "/") {
      res = n2 !== 0 ? n1 / n2 : "Error";
    }

    setResultado(res.toString());
    setValor1("");
    setValor2("");
    setOperador("");
    setFase("valor1");
  };

  const reset = () => {
    setValor1("");
    setValor2("");
    setOperador("");
    setResultado("");
    setFase("valor1");
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <div>
        <p>{fase === "valor1" ? valor1 : valor2 || "0"}</p>
        <p>Resultado: {resultado}</p>
      </div>
      <div>
        <Button onClick={() => inputNumber("1")}>1</Button>
        <Button onClick={() => inputNumber("2")}>2</Button>
        <Button onClick={() => inputNumber("3")}>3</Button>
        <Button onClick={() => elegirOperacion("+")}>+</Button>
      </div>
      <div>
        <Button onClick={() => inputNumber("4")}>4</Button>
        <Button onClick={() => inputNumber("5")}>5</Button>
        <Button onClick={() => inputNumber("6")}>6</Button>
        <Button onClick={() => elegirOperacion("-")}>-</Button>
      </div>
      <div>
        <Button onClick={() => inputNumber("7")}>7</Button>
        <Button onClick={() => inputNumber("8")}>8</Button>
        <Button onClick={() => inputNumber("9")}>9</Button>
        <Button onClick={() => elegirOperacion("*")}>*</Button>
      </div>
      <div>
        <Button onClick={() => inputNumber("0")}>0</Button>
        <Button onClick={calcular}>=</Button>
        <Button onClick={() => elegirOperacion("/")}>/</Button>
        <Button onClick={reset}>C</Button>
      </div>
    </div>
  );
};

export default Calculadora;
