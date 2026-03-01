import { memo } from "react";

const Item = memo(function Item({ item, onLike, onDelete }) {
  console.log("Render Item:", item.titulo);

  return (
    <li>
      <span>{item.titulo}</span>
      <button onClick={() => onLike(item.id)}>❤️ {item.likes}</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </li>
  );
});

export default Item;
