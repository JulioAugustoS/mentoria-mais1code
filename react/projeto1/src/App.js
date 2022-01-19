import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [contador, setContador] = useState();

  return (
    <div className="App">
      <input
        type="number"
        value={contador}
        onChange={(e) => setContador(Number(e.target.value))}
      />
      <button
        id="button"
        className="button"
        onClick={() => setContador(contador + 1)}
      >
        Adicionar
      </button>
      <button onClick={() => setContador(contador - 1)}>Remover</button>

      <h1>{contador}</h1>
    </div>
  );
};

export default App;
