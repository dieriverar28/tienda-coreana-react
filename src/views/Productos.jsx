import Hero from '../components/Hero';
import Seccion from '../components/Seccion';
import GaleriaProductos from '../components/GaleriaProductos';

import {productos} from '../data/productos';
import banner from '../assets/img/maquillajeskincare.jpg';

function Productos() {

  // filter se queda solo con los productos de cada categoría.
  const maquillaje = productos.filter((p) => p.categoria === 'maquillaje');
  const skincare = productos.filter((p) => p.categoria === 'skincare');

  return (
    <>
      <Hero
        titulo="OPCIONES DE PRODUCTOS"
        subtitulo="SELECCIONA"
        imagen={banner}
        alt="Maquillaje y skincare coreano"
      />

      <main id="contenido">

        <Seccion titulo="K-Skin Maquillaje">
          <p>Maquillaje que cuida tu piel. ¡Elige lo que quieras!</p>
          <GaleriaProductos productos={maquillaje} />
        </Seccion>

        <Seccion titulo="Escoge el mejor K-Skincare">
          <GaleriaProductos productos={skincare} />
        </Seccion>

      </main>
    </>
  );
}

export default Productos;
