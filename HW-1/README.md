# Introducción al Virtual DOM

## ¿Qué es el Virtual DOM?

El **Virtual DOM** es una representación en memoria del DOM real que utiliza React.

## ¿Cómo funciona el Virtual DOM?

El Virtual DOM es una copia del DOM que nos permite hacer cambios sin tocar el DOM que sería costoso en términos de rendimiento. Se compara los cambios realizados en el árbol de componentes de virtual DOM; si hubo nuevos cambios en el virtual DOM al comparar el estado anterior provocara que se actualice los componentes involucrados al DOM.

## ¿Dónde se está utilizando Virtual DOM?
### Ejemplo de React Router
> ./ejemploCLase3_reatRouter

Virtual DOM se está utiliando en todo el rendering presente en los archivos `App.jsx`, `Navbar.jsx` y los componentes de la página.

El **JSX de React** se transpila a llamadas de `React.createElement()`, que crean nodos de Virtual DOM.

React Router aprovecha el Virtual DOM para intercambiar componentes de ruta de manera eficiente sin recargar la página completa. Cuando cambia la ruta, el **algoritmo de reconciliación de React** actualiza solo el contenido del elemento `<Route>` modificado.

### Lista de Pokemones
> ./mapExample

`PokemonList.jsx` mapea sobre arrays de Pokemones.

`.map()` crea nodos de Virtual DOM para cada componente Pokemon.

Virtual DOM reconcilia la lista de manera eficiente al actualizar únicamente los componentes cambiados (si las llaves son correctas).

### Demostración de React Memo
> ./memo

Presente en `App.jsx` en el count state con tres componentes hijos.

Cada actualización de estado (state) crea un nuevo árbol de Virtual DOM, determinando qué actualizaciones de DOM se necesitan.

Esto demuestra cómo React.memo previene reconciliaciones innecesarias de Virtual DOM para componentes.

### Lista dinámica
> ./task1-list

En `ItemList.jsx` se renderiza dinámicamente la lista.

Varios cambios de estado (`items`, `nuevoTitulo`, `nextId`) activan el **diffing** de Virtual DOM.

Virtual DOM maneja de manera eficiente el añadir elementos a la lista, el eliminar elementos, actualizar *likes* y reordenar elementos en la lista.

---

# Función de React.memo

## ¿Qué es React.memo?

**React.memo** es una función de orden superior que permite memorizar componentes funcionales.

## ¿Cómo optimiza el rendimiento?

Evita hacer otro renderizado cuando el componente no hizo ningún cambio si esta en React.memo().

---

# Relación entre Virtual DOM y React.memo

Se usan para hacer una optimización de la actualización de DOM por el virtual DOM y evita los renderizados innecesarios de componentes por parte de React.memo(). Ambos son un buen combo para un mejor rendimiento en tiempos.

---

# Patrones de Re-Renderizado
### State-Driven Re-Rendering (Patrón Universal)
En todo el repositorio, cada hook de `useState` crea un trigger de re-renderizado. Cuando `setState` es llamado, el componente y todos sus componentes hijos son re-renderizados por default. Sin embargo, el uso de **Virtual DOM** determina las actualizaciones de DOM necesarias.

### Cascada de Re-Renderizado Padre-Hijo
En React, por predeterminado, cuando un componente Padre es re-renderizado, todos sus componentes hijos también lo hacen, sin importar si sus props han cambiado o no.

### Memoización que evita Re-Renderizado
En la demostración de React Memo, se utiliza memoización mediante `React.memo()`, lo que previene re-renderizados innecesarios.

En específico:
``` typescript
const ChildA = memo((props) => { ... })
// Padre re-renderiza → ChildA revisa props → No hay cambio → Se salta el re-render
```
- ChildA se registra en log una vez al montarse, y nunca más.
- ChildB/C se registran cada vez que el padre vuelve a renderizar.
- En console log se muestra claramente la diferencia.

# Bugs evitados
### Uso de Virtual DOM
Virtual DOM previene bugs que ocurrirían si se usara manipulación directa de DOM. Por ejemplo:

- **Problemas de estado y sincronicación:**
Sin el uso de Virtual DOM, las aplicaciones son más propensas a presentar inconsistencias en la interfaz de usuario, en las que el DOM no refleja con precisión el estado actual, race conditions causadas por actualizaciones asíncronas que se aplican fuera de orden y crean errores dependientes del tiempo, y referencias de componentes perdidas o no válidas tras actualizaciones dinámicas.

- **Problemas de rendimiento y memoria:**
Sin los mecanismos de batching y abstracción del virtual DOM, las aplicaciones pueden sufrir fugas de memoria debido a la limpieza inadecuada de los detectores de eventos, el thrashing del DOM causado por manipulaciones directas frecuentes que desencadenan repetidos recálculos del diseño, y las inconsistencias del navegador derivadas de diferencias entre navegadores no gestionadas en el DOM.

- **Problemas de manejo de listas:**
Sin el proceso de reconciliación de Virtual DOM y keys estables, las aplicaciones pueden experimentar actualizaciones incorrectas de elementos durante los reordenamientos o eliminaciones, confusiones en el estado de los componentes entre los elementos de la lista y remounts innecesarios que conducen a operaciones duplicadas y a la reejecución involuntaria de efectos.

### Uso de React.memo
React.memo previene bugs de rendimiento y efectos secundarios no deseados. Por ejemplo:

- **Problemas de rendimiento:** 
Sin los mecanismos adecuados de optimización del renderizado, las aplicaciones pueden sufrir costosos recálculos cuando los datos no han cambiado, re-renderizados innecesarios de elementos secundarios provocados por actualizaciones del estado de los elementos principales y llamadas repetidas a la API que provocan spam en la red y un rendimiento bajo.

- **Problemas de experiencia de usuario:**
Sin una reconciliación controlada y una estabilidad de renderizado, las aplicaciones pueden experimentar pérdidas de enfoque de entrada o de posición del cursor durante la escritura, interrupciones en las animaciones que se reinician a mitad de la ejecución y restablecimientos inesperados de la posición de desplazamiento tras las actualizaciones de los componentes principales.

- **Problemas de efectos secundarios:**
Sin medidas de seguridad en torno a la ejecución de efectos y la gestión del ciclo de vida de los componentes, las aplicaciones pueden encontrarse con eventos analíticos duplicados que se activan varias veces, reconexiones repetidas en cada renderizado, bucles de renderizado infinitos causados por devoluciones de llamada, y cierres obsoletos que provocan un comportamiento inconsistente en los controladores de eventos.

# Glosario
- **JSX de React:**
JSX (JavaScript XML) es una
extensión de sintaxis para JavaScript diseñada por React para facilitar la creación de interfaces de usuario. Permite escribir estructuras similares a HTML directamente en el código JavaScript, lo que mejora la legibilidad y el mantenimiento, siendo luego compilado a código JavaScript válido.
- **Algoritmo de reconciliación de React:**
Proceso eficiente que actualiza el DOM real comparándolo con un Virtual DOM en memoria. Utiliza un algoritmo de diferenciación (diffing) para detectar cambios de estado y aplica solo las modificaciones necesarias, mejorando el rendimiento y permitiendo un renderizado asíncrono e interrumpible.
- **Algoritmo de diffing de React:**
Componente clave del Algoritmo de reconciliación. El algoritmo de diffing identifica qué cambió entre dos árboles virtuales, mientras que la reconciliación es el proceso completo de aplicar esos cambios al DOM real. El diffing es el "qué", la reconciliación es el "cómo" y el "cuándo" se actualiza la interfaz.

# Colaboración

#### Jonathan
Documentacion de las preguntas de virtual DOM, React.memo() y sus relacion para un mejor rendimiento. Creacion del repo y despliegue de la parte 2.

#### Mario
Implementación de la lista dinámica con el formato map example, implementando: Nuevos elementos, eliminar existentes, revertir orden, incrementar contador de me gusta así como su botón.

#### Sebastián
Análisis y documentación del uso de Virtual DOM en cada directorio del repositorio, patrones de re-renderizado, bugs evitados y glosario.

#### Luis Valde
Implementaciòn del hook memo para poder memorizar componentes funcionales y no renderizar innecesariamente en el punto 1. (implementaciòn en carpeta 'memo').

#### Angel Gabriel
Implementación de useCallback en las funciones de los componentes ListItem e Item para el correcto uso de React.memo y evitar el renderizado innecesario de los componentes.
