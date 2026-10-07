// Barra superior roja de "Envío gratis" (venía en index.html y index2.html).
function Topbar({ texto }) {
  return (
    <div className="topbar">
      <div className="woostify-container">
        <div class="topbar-item topbar-left"></div>
        <div className="topbar-item topbar-center">{texto}</div>
        <div className="topbar-item topbar-right"></div>
      </div>
    </div>
  );
}

export default Topbar;
