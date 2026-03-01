import { memo } from "react";

const Item = memo(function Item({ nombre }) {
    console.log("Render Item:", nombre);
    return <li>{nombre}</li>;
});

export default Item;


/*
{
    $$typeof: Symbol(react.element),
    type: Item,
    key: "123",
    ref: null,
    props: { nombre: "Nuevo" }
}
*/