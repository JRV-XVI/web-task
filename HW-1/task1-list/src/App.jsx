import { useState, useCallback } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([
    { id: 1, titulo: "Primer elemento", likes: 0 },
    { id: 2, titulo: "Segundo elemento", likes: 0 },
    { id: 3, titulo: "Tercer elemento", likes: 0 },
  ]);

  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nextId, setNextId] = useState(4);

  console.log("Render App");

  const agregarItem = useCallback(() => { 
    if (!nuevoTitulo.trim()) 
      return; 

    setItems((items) => [ 
      ...items, 
      { id: nextId, titulo: nuevoTitulo, likes: 0 }, 
    ]); 
    setNextId((id) => id + 1); 
    setNuevoTitulo(""); 
  }, 
  [nuevoTitulo, nextId]);



  const eliminarItem = useCallback((id)  => {
    setItems( (items)  => items.filter((item) => item.id !== id));
  }, []);



  const incrementarLikes = useCallback((id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, likes: item.likes +1 } : item
      )
    );
  },
  []);



  const revertirOrden = useCallback(() => {
    setItems((items) => [...items].reverse());
  }, 
  []);

  return (
    <div>
      <h1>Lista Dinámica de Elementos</h1>

      <div>
        <input
          type="text"
          placeholder="Título del elemento"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <button onClick={agregarItem}>Agregar</button>
        <button onClick={revertirOrden}>Revertir Orden</button>
      </div>

      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onLike={incrementarLikes}
            onDelete={eliminarItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
