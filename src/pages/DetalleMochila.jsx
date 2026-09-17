import { useParams, Link } from "react-router-dom";
import { mochilas } from "../data/mochilas";
import "./DetalleMochila.css";

function DetalleMochila() {
  const { id } = useParams();
  const mochila = mochilas.find((m) => m.id === Number(id));

  if (!mochila) {
    return (
      <main className="detalle detalle--empty">
        <h1>Mochila no encontrada</h1>
        <Link to="/catalogo" className="detalle__back">← Volver al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="detalle">
      <div className="detalle__image">
        <img src={mochila.imagen} alt={mochila.nombre} />
      </div>

      <div className="detalle__info">
        <p className="detalle__eyebrow">Colección Retro.</p>
        <h1 className="detalle__title">{mochila.nombre}</h1>
        <p className="detalle__price">${mochila.precio}.00</p>
        <p className="detalle__desc">{mochila.descripcion}</p>
        <p className="detalle__stock">Stock disponible: {mochila.stock} unidades</p>

        <button className="detalle__cta">AGREGAR AL CARRITO</button>
        <Link to="/catalogo" className="detalle__back">← Volver al catálogo</Link>
      </div>
    </main>
  );
}

export default DetalleMochila;