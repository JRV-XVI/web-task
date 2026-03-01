# Tarea - Optimización con React.memo

## ¿Qué hace la aplicación?

Una página con un **botón-contador**. Cada vez que se presiona, el número sube en 1.  
Además, hay **3 componentes hijos** (`ChildA`, `ChildB`, `ChildC`) que representan textos independientes.

---

## El problema sin memo

En React, cuando el estado del padre cambia, **todos sus componentes hijos se re-renderizan**, aunque sus datos no hayan cambiado. Esto es un desperdicio de recursos.

---

## ¿Cómo se usó `memo`?

`React.memo` es una función que **envuelve un componente** y le dice a React:

> "Solo vuelve a renderizar este componente si sus props cambiaron."

Como los hijos no reciben props que cambien, `memo` evita que se re-rendericen al presionar el botón.

### ChildA — **CON memo** 

```jsx
import { memo } from 'react'

const ChildA = memo((props) => {
    return (
        console.log("Soy el hijo A que recuerda cuando se cambia")
    )
})
```

`ChildA` está envuelto en `memo`. Cuando el contador sube, **este hijo NO se re-renderiza** porque sus props no cambiaron.

---

### ChildB y ChildC — **SIN memo**

```jsx
function ChildB() {
    return (
       console.log("Soy el hijo B")
    )
}
```

`ChildB` y `ChildC` son funciones normales sin `memo`. Cada vez que el contador cambia, **estos hijos SÍ se re-renderizan** innecesariamente.

---

## Conclusión

Usando `React.memo` en `ChildA` se demuestra que **solo el componente que contiene el estado (`App`) se actualiza**, mientras que los hijos memorizados permanecen intactos, optimizando el rendimiento de la aplicación.
