import { Link } from "react-router-dom";
import "./Registro.css";

function Registro() {
  
  return (
    <div className="auth">
      <div className="auth__aside">
        <h2 className="auth__brand">Golden Suisse<span>®</span></h2>

        <div className="auth__star">
          <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="6">
            <line x1="100" y1="10"  x2="100" y2="70"  />
            <line x1="100" y1="130" x2="100" y2="190" />
            <line x1="10"  y1="100" x2="70"  y2="100" />
            <line x1="130" y1="100" x2="190" y2="100" />
            <line x1="36"  y1="36"  x2="80"  y2="80"  />
            <line x1="120" y1="120" x2="164" y2="164" />
            <line x1="36"  y1="164" x2="80"  y2="120" />
            <line x1="120" y1="80"  x2="164" y2="36"  />
          </svg>
        </div>

        <p className="auth__copyright">© Golden Suisse 2025. All rights reserved</p>
      </div>

      <div className="auth__panel">
        <Link to="/login" className="auth__create">Ya tengo cuenta</Link>

        <h1 className="auth__title">Registro</h1>

        <form className="auth__form">
          <div className="auth__field">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="auth__field">
            <label>Apellido</label>
            <input type="text" placeholder="Tu apellido" />
          </div>
          <div className="auth__field">
            <label>Email</label>
            <input type="email" placeholder="tu@correo.com" />
          </div>
          <div className="auth__field">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" />
          </div>
        </form>

        <button type="submit" className="auth__submit">SIGN UP</button>
      </div>
    </div>
  );
}

export default Registro;