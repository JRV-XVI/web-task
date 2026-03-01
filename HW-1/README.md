# Introducción al Virtual DOM

## ¿Qué es el Virtual DOM?

El **Virtual DOM** es una representación en memoria del DOM real que utiliza React

## ¿Cómo funciona el Virtual DOM?

El virtual DOM es una copia del DOM que nos permite hacer cambios sin tocar el DOM que sería costoso en términos de rendimiento. Se compara los cambios realizados en el árbol de componentes de virtual DOM; si hubo nuevos cambios en el virtual DOM al comparar el estado anterior provocara que se actualice los componentes involucrados al DOM.

---

# Función de React.memo

## ¿Qué es React.memo?

**React.memo** es una función de orden superior que permite memorizar componentes funcionales.

## ¿Cómo optimiza el rendimiento?

Evita hacer otro renderizado cuando el componente no hizo ningún cambio si esta en React.memo().

---

# Relación entre ambos

Se usan para hacer una optimización de la actualización de DOM por el virtual DOM y evita los renderizados innecesarios de componentes por parte de React.memo(). Ambos son un buen combo para un mejor rendimiento en tiempos.

---

# Colaboración

Jonathan: Documentacion de las preguntas de virtual DOM, React.memo() y sus relacion para un mejor rendimiento. Creacion del repo y despliegue de la parte 2.
Mario: Implementación de la lista dinámica con el formato map example, implementando: Nuevos elementos, eliminar existentes, revertir orden, incrementar contador de me gusta así como su botón

