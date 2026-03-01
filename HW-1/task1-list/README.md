# Task 1 - Lista Dinámica con React

Este proyecto implementa una lista dinámica de elementos que permite:

- ✅ Agregar nuevos elementos
- ✅ Eliminar elementos existentes
- ✅ Revertir el orden de la lista
- ✅ Incrementar un contador de "me gusta" en cada elemento

## Características

- Utiliza el método `map()` para renderizar la lista
- Cada elemento tiene una `key` única y estable (usa `id`, no índice)
- Implementa `React.memo` para optimizar el rendimiento
- Sistema de "Me gusta" similar a redes sociales

## Instalación

```bash
npm install
```

## Uso

```bash
npm run dev
```

## Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal con toda la lógica
├── components/
│   └── Item.jsx         # Componente individual optimizado con memo
├── App.css              # Estilos
└── main.jsx             # Punto de entrada
```

## Funcionalidades

### Agregar elementos
Escribe el título en el input y presiona "Agregar"

### Eliminar elementos  
Cada elemento tiene un botón "Eliminar"

### Revertir orden
Botón "Revertir Orden" invierte toda la lista

### Me gusta
Cada elemento tiene un botón ❤️ con contador de likes
