# K-Skin (React)

Tienda de cosmética coreana. Migración del proyecto HTML/CSS/JS a React + Vite
usando react-router-dom y react-bootstrap.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── main.jsx              → StrictMode + BrowserRouter
├── App.jsx               → Topbar + Header + <Routes> + Footer
├── App.css               → estilos del sitio
├── data/productos.js     → catálogo único (6 productos)
├── utils/validaciones.js → reglas de validación (antes validacion.js)
├── assets/img/           → imágenes
├── components/           → Topbar, Header, Hero, Seccion, Footer,
│                           GaleriaProductos, TarjetaProducto, CampoFormulario
└── views/                → Home, Productos, Producto (/:id), Contacto, Login, Registro
```

## Rutas

| Ruta              | Vista     |
| ----------------- | --------- |
| `/`               | Home      |
| `/productos`      | Productos |
| `/productos/:id`  | Producto  |
| `/contacto`       | Contacto  |
| `/login`          | Login     |
| `/registro`       | Registro  |
