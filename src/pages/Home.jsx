import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="hero">
      <p className="hero__eyebrow">Colección 2025</p>

      <h1 className="hero__title">
        Mochilas hechas
        <br />
        para durar.
      </h1>

      <p className="hero__subtitle">
        Diseño minimalista, materiales resistentes.
        Encuentra la tuya.
      </p>

      <Link to="/login" className="hero__cta">
        VER MOCHILAS →
      </Link>
    </main>
  );
}

export default Home;