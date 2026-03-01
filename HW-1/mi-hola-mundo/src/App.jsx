import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [contador, setContador] = useState(0);
  const [items, setItems] = useState(["A", "B", "C"]);
  //const [nuevoNombre, setNuevoNombre] = useState("");

  console.log("Render App");

  function agregarItem() {
    setItems([...items, "Nuevo"]);
    
    /*
    if (!nuevoNombre.trim()) return;

    setItems([...items, nuevoNombre]);
    setNuevoNombre(""); // limpiar input*/
  }

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>

      {/* Campo para escribir el nombre
      <input
        type="text"
        placeholder="Escribe un nombre"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
      />*/}

      <button onClick={agregarItem}>
        Agregar item
      </button>

      <ul>
        {items.map((item, index) => (
          <Item key={item} nombre={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
