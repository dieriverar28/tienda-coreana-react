import { Link, useParams } from 'react-router-dom';

import Seccion from '../components/Seccion';
import productos from '../data/productos';

function Producto() {

  // useParams lee el :id de la URL (/productos/protector-solar → 'protector-solar')
  const { id } = useParams();

  // find recorre el catálogo y devuelve el primero que coincida.
  const producto = productos.find((p) => p.id === id);

  // Si alguien escribe una URL que no existe, mostramos un aviso
  // en vez de reventar al intentar leer producto.nombre.
  if (!producto) {
    return (
      <main id="contenido">
        <Seccion titulo="Producto no encontrado">
          <p>No tenemos ningún producto con ese identificador.</p>
          <p><Link to="/productos">← Volver a productos</Link></p>
        </Seccion>
      </main>
    );
  }

  return (
    <main id="contenido">
      <Seccion titulo={producto.nombre}>

        <img
          className="imagen-detalle"
          src={producto.imagen}
          alt={producto.nombre}
        />

        <p>{producto.descripcion}</p>
        <p className="precio">${producto.precio.toLocaleString('es-CL')}</p>

        <p><Link to="/productos">← Volver a productos</Link></p>

      </Seccion>
    </main>
  );
}

export default Producto;
