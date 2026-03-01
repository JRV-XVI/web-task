import { useState } from "react";
import Item2 from "./components/item2";

export default function App() {
    const [items, setItems] = useState([
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Luis" },
        { id: 3, nombre: "Maria" },
        { id: 4, nombre: "Karla" }
    ]);

    function invertirLista() {
        setItems(prev => [...prev].reverse());
    }

    return (
        <div>
        <button onClick={invertirLista}>
            Invertir lista
        </button>

            <ul>
                {items.map((item, index) => (
                <Item2
                    key={item.id}
                    nombre={item.nombre}
                />
                ))}
        </ul>
        </div>
    );
}
