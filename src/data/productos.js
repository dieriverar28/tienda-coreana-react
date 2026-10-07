// Catálogo único de K-Skin.
// Vive acá para que Home, Productos, Producto y Contacto usen los mismos datos
// en vez de repetir el array en cada vista (antes estaba copiado en Home y en Productos).
// Los precios son números: se formatean al mostrarlos (ver TarjetaProducto).

import tocobo from '../assets/img/TOCOBO04.jpg';
import glaze from '../assets/img/2-rosy-mucha.jpg';
import numbuzin from '../assets/img/15552_krskin_vc.jpg';
import base2an from '../assets/img/2aN_BASE.jpg';
import protector from '../assets/img/protectorSolas.jpeg';
import lipTatto from '../assets/img/liptatto.jpg';

const productos = [
  {
    id: 'tocobo-skin',
    imagen: tocobo,
    nombre: 'TOCOBO Skin',
    descripcion: 'Protección solar.',
    precio: 15990,
    categoria: 'skincare'
  },
  {
    id: 'glaze-bouncing-tint',
    imagen: glaze,
    nombre: 'Glaze Bouncing Tint',
    descripcion: 'Tinte labial con efecto voluminizador refrescante.',
    precio: 12990,
    categoria: 'maquillaje'
  },
  {
    id: 'numbuzin-tonico',
    imagen: numbuzin,
    nombre: 'Numbuzin Tónico',
    descripcion: 'Tónico para la piel con propiedades revitalizantes.',
    precio: 11990,
    categoria: 'skincare'
  },
  {
    id: '2an-gleaming-tension',
    imagen: base2an,
    nombre: '2aN Gleaming Tension N°21',
    descripcion: 'Base de maquillaje en formato cushion, con tecnología tension net que distribuye el maquillaje de forma uniforme, logrando una cobertura pareja y acabado luminoso.',
    precio: 13990,
    categoria: 'maquillaje'
  },
  {
    id: 'protector-solar',
    imagen: protector,
    nombre: 'Protector Solar',
    descripcion: 'Protección SPF50+ de textura ligera que se absorbe rápidamente sin dejar residuo grasoso.',
    precio: 14990,
    categoria: 'skincare'
  },
  {
    id: 'lip-tatto-berrisom',
    imagen: lipTatto,
    nombre: 'Lip Tatto Berrisom',
    descripcion: 'El tinte labial peel-off original de Corea.',
    precio: 15990,
    categoria: 'maquillaje'
  }
];

export default productos;
