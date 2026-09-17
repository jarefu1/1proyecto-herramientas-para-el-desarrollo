import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="auth">
      {/* Panel izquierdo decorativo */}
      <div className="auth__aside">
        <h2 className="auth__brand">MHM-STORE<span>®</span></h2>

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

      {/* Panel derecho con formulario */}
      <div className="auth__panel">
        <Link to="/registro" className="auth__create">Crear una cuenta</Link>

        <h1 className="auth__title">Login</h1>

        <form className="auth__form">
          <div className="auth__field">
            <label>Email</label>
            <input
              type="email"
              defaultValue="mark.johnson@gmail.com"
              placeholder="tu@correo.com"
            />
          </div>

          <div className="auth__field">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" />
          </div>
        </form>

        <div className="auth__options">
          <label className="auth__remember">
            <input type="checkbox" />
            <span>Recordarme</span>
          </label>
          <a href="#" className="auth__forgot">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" className="auth__submit">SIGN IN</button>
      </div>
    </div>
  );
}

export default Login;