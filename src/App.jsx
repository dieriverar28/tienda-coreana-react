// Los estilos se importan UNA sola vez, acá, y valen para toda la app.
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Productos from './views/Productos';
import Producto from './views/Producto';
import Contacto from './views/Contacto';
import Login from './views/Login';
import Registro from './views/Registro';

function App() {

  // El menú ya no usa anclas (#inicio): ahora son rutas.
  const itemsMenu = [
    { to: '/', label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/login', label: 'Ingresar' },
    { to: '/registro', label: 'Registro' }
  ];

  return (
    <>
      {/* Topbar, Header y Footer quedan fuera de <Routes>: se dibujan una vez
          y se reutilizan en todas las páginas. Solo cambia el centro. */}
      <Topbar texto="Envío gratis en compras sobre $20.000" />
      <Header itemsMenu={itemsMenu} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        {/* Cualquier otra URL vuelve al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer texto="© 2026 K-Skin — Lo mejor de la estética coreana en tu piel." />
    </>
  );
}

export default App;
