// Encabezado con título, subtítulo e imagen (el <header id="encabezado"> del HTML).
// Se reutiliza en Home y en Productos cambiando las props.
function Hero({ titulo, subtitulo, imagen, alt }) {
  return (
    <header id="encabezado">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <img className="hero-imagen" src={imagen} alt={alt} />
    </header>
  );
}

export default Hero;
