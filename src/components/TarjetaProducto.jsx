import { useState } from 'react';
import { Link } from 'react-router-dom';

function TarjetaProducto({ id, imagen, nombre, descripcion, precio }) {

  const [meGusta, setMeGusta] = useState(false);

  const alternar = () => setMeGusta(!meGusta);

  return (
    <article className="tarjeta">

      {/* La imagen y el nombre llevan al detalle /productos/:id */}
      <Link to={'/productos/' + id} className="espacio-imagen">
        <img src={imagen} alt={nombre} />
      </Link>

      <h3>
        <Link to={'/productos/' + id}>{nombre}</Link>
      </h3>

      {/* toLocaleString('es-CL') pone el punto de miles: 15990 → 15.990 */}
      <p className="precio">${precio}</p>

      <p className="descripcion">{descripcion}</p>

      <button
        onClick={alternar}
        style={{
          backgroundColor: meGusta ? '#c590f0' : '#f0ccf3',
          color: meGusta ? '#fffeff' : '#17171a',
          fontWeight: 'bold',
          borderRadius: '4px'
        }}
      >
        {meGusta ? '🥀 Quitar' : '🌸 Agregar'}
      </button>

    </article>
  );
}

export default TarjetaProducto;
