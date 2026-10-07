import { Link } from 'react-router-dom';

// Solo el menú. El título y el logo se movieron a Hero.jsx porque el Header
// ahora se muestra en todas las páginas y el hero es exclusivo de Home.
function Header({ itemsMenu }) {
  return (
    <nav id="menu-principal" aria-label="Menú principal">
      <ul>
        {itemsMenu.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
