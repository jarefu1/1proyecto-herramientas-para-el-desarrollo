import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/",         icon: "⌂", label: "Inicio" },
  { to: "/favoritos",icon: "♡", label: "Favoritos" },
  { to: "/cuenta",   icon: "▢", label: "Cuenta" },
  { to: "/productos",icon: "✦", label: "Productos" },
  { to: "/ajustes",  icon: "⚙", label: "Ajustes" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* Círculo con estrella (logo) */}
       // Después
<NavLink to="/" className="navbar__logo" title="MHM-STORE">
  <span>✦</span>
</NavLink>
        {/* Píldora blanca con los íconos del menú */}
        <nav className="navbar__pill">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              title={l.label}
              className={({ isActive }) =>
                "navbar__icon" + (isActive ? " navbar__icon--active" : "")
              }
            >
              {l.icon}
            </NavLink>
          ))}

          {/* Botón logout dentro de la píldora */}
          <button className="navbar__icon navbar__logout" title="Salir">
            ↩
          </button>
        </nav>

        {/* Círculo del avatar = Login */}
        <Link to="/login" className="navbar__avatar" title="Iniciar sesión">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="Iniciar sesión"
          />
        </Link>

      </div>
    </header>
  );
}

export default Navbar;