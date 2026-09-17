import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, nombre, precio, imagen }) {
  return (
    <Link to={`/producto/${id}`} className="product">
      <div className="product__image-wrap">
        <img src={imagen} alt={nombre} className="product__image" loading="lazy" />
      </div>
      <div className="product__info">
        <h3 className="product__name">{nombre}</h3>
        <p className="product__price">${precio}</p>
      </div>
    </Link>
  );
}

export default ProductCard;