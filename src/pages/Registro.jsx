
import { Link } from "react-router-dom";
import "./Registro.css";

function Registro() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulario validado correctamente. El registro aún no está conectado a un backend.");
  };

  return (
    <div className="auth">
      <div className="auth__aside">
        <h2 className="auth__brand">
          Golden Suisse<span>®</span>
        </h2>

        <div className="auth__star">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            stroke="white"
            strokeWidth="6"
          >
            <line x1="100" y1="10" x2="100" y2="70" />
            <line x1="100" y1="130" x2="100" y2="190" />
            <line x1="10" y1="100" x2="70" y2="100" />
            <line x1="130" y1="100" x2="190" y2="100" />
            <line x1="36" y1="36" x2="80" y2="80" />
            <line x1="120" y1="120" x2="164" y2="164" />
            <line x1="36" y1="164" x2="80" y2="120" />
            <line x1="120" y1="80" x2="164" y2="36" />
          </svg>
        </div>

        <p className="auth__copyright">
          © Golden Suisse 2025. All rights reserved
        </p>
      </div>

      <div className="auth__panel">
        <Link to="/login" className="auth__create">
          Ya tengo cuenta
        </Link>

        <h1 className="auth__title">Registro</h1>

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__field">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              autoComplete="given-name"
              required
            />
          </div>

          <div className="auth__field">
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              placeholder="Tu apellido"
              autoComplete="family-name"
              required
            />
          </div>

          <div className="auth__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="auth__field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="auth__submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
