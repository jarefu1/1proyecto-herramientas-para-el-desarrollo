import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { mochilas } from "../data/mochilas";
import "./Catalogo.css";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");

  const filtradas = mochilas.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="catalogo">
      <div className="catalogo__header">
<h1 className="catalogo__title">Catálogo Retro. ✦</h1>        <input
          type="text"
          placeholder="Buscar mochila..."
          className="catalogo__search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {filtradas.length === 0 ? (
        <p className="catalogo__empty">No se encontraron mochilas.</p>
      ) : (
        <div className="catalogo__grid">
          {filtradas.map((m) => (
            <ProductCard key={m.id} {...m} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Catalogo;