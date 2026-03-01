import { useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      titulo: "Primer elemento",
      likes: 0,
    },
    {
      id: 2,
      titulo: "Segundo elemento",
      likes: 0,
    },
    {
      id: 3,
      titulo: "Tercer elemento",
      likes: 0,
    },
  ]);

  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nextId, setNextId] = useState(4);

  const agregarItem = () => {
    if (!nuevoTitulo.trim()) return;

    setItems([...items, { id: nextId, titulo: nuevoTitulo, likes: 0 }]);
    setNextId(nextId + 1);
    setNuevoTitulo("");
  };

  const eliminarItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const incrementarLikes = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const revertirOrden = () => {
    setItems([...items].reverse());
  };

  return (
    <div>
      <h1>Lista Dinámica de Elementos</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Título del elemento"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && agregarItem()}
        />
        <button onClick={agregarItem}>Agregar</button>
        <button onClick={revertirOrden}>Revertir Orden</button>
      </div>

      <div className="row">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              likes={item.likes}
              onLike={incrementarLikes}
              onDelete={eliminarItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
