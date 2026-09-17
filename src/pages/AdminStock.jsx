import { useState } from "react";
import { mochilas as mochilasIniciales } from "../data/mochilas";
import "./AdminStock.css";

function AdminStock() {
  const [items, setItems] = useState(mochilasIniciales);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({ nombre: "", precio: "", stock: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregar = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.precio) return;

    const nuevo = {
      id: Date.now(),
      nombre: form.nombre,
      precio: Number(form.precio),
      stock: Number(form.stock) || 0,
      descripcion: "Producto agregado desde el panel.",
      imagen: `https://picsum.photos/seed/m${Date.now()}/600/800`,
    };

    setItems([...items, nuevo]);
    setForm({ nombre: "", precio: "", stock: "" });
  };

  const eliminar = (id) => {
    if (window.confirm("¿Eliminar esta mochila?")) {
      setItems(items.filter((m) => m.id !== id));
    }
  };

  const iniciarEdicion = (m) => {
    setEditando(m.id);
    setForm({ nombre: m.nombre, precio: m.precio, stock: m.stock });
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    setItems(
      items.map((m) =>
        m.id === editando
          ? { ...m, nombre: form.nombre, precio: Number(form.precio), stock: Number(form.stock) }
          : m
      )
    );
    setEditando(null);
    setForm({ nombre: "", precio: "", stock: "" });
  };

  const cancelar = () => {
    setEditando(null);
    setForm({ nombre: "", precio: "", stock: "" });
  };

  return (
    <main className="admin">
      <h1 className="admin__title">Panel de Stock</h1>
      <p className="admin__subtitle">{items.length} productos en inventario</p>

      <form className="admin__form" onSubmit={editando ? guardarEdicion : agregar}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          name="precio"
          type="number"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
        />

        <button type="submit" className="admin__btn admin__btn--primary">
          {editando ? "Guardar" : "Agregar"}
        </button>

        {editando && (
          <button type="button" onClick={cancelar} className="admin__btn">
            Cancelar
          </button>
        )}
      </form>

      <div className="admin__table-wrap">
        <table className="admin__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.nombre}</td>
                <td>${m.precio}</td>
                <td>{m.stock}</td>
                <td>
                  <button className="admin__action" onClick={() => iniciarEdicion(m)}>
                    Editar
                  </button>
                  <button className="admin__action admin__action--danger" onClick={() => eliminar(m.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminStock;