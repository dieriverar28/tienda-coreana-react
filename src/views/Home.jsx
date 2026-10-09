import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Seccion from '../components/Seccion';
import GaleriaProductos from '../components/GaleriaProductos';

import {productos} from '../data/productos';
import logo from '../assets/img/logoskininternational.png';
import coreana from '../assets/img/coreana.jpg';
import { itemsMenu } from '../data/itemsMenu';
function Home() {

  // slice(0, 3) = solo los 3 primeros del catálogo, como destacados.
  const destacados = productos.slice(0, 3);

  return (
    <>
      <Hero
        titulo="K-Skin"
        subtitulo="Lo mejor de la estética coreana en tu piel"
        imagen={logo}
        alt="Logo K-Skin"
        itemsMenu={itemsMenu}
      />

      <main id="contenido">

        <Seccion titulo="Bienvenidos a K-Skin">
          <p>Los mejores productos de Corea están aquí.</p>
          <p>¡Puedes encontrar todo lo que necesites!</p>
        </Seccion>

        <Seccion titulo="¡Revisa lo nuevo!">
          <img className="imagen-novedades" src={coreana} alt="Novedades K-Skin" />
          <h3>Revisa nuestros productos estrella</h3>

          <GaleriaProductos productos={destacados} />

          <p>
            <Link to="/productos">Ver todos los productos →</Link>
          </p>
        </Seccion>

      </main>
    </>
  );
}

export default Home;
