import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DetalleMochila from "../pages/DetalleMochila";

const renderDetalle = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <Routes>
        <Route path="/producto/:id" element={<DetalleMochila />} />
      </Routes>
    </MemoryRouter>
  );

describe("DetalleMochila", () => {
  it("muestra la información completa de la mochila según el id", () => {
    renderDetalle("/producto/1");

    expect(screen.getByRole("heading", { name: "Mochila Océano" })).toBeInTheDocument();
    expect(screen.getByText("$135.00")).toBeInTheDocument();
    expect(screen.getByText(/stock disponible: 15/i)).toBeInTheDocument();
  });

  it("muestra 'Mochila no encontrada' si el id no existe", () => {
    renderDetalle("/producto/999");

    expect(screen.getByText(/mochila no encontrada/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /volver al catálogo/i })).toBeInTheDocument();
  });
});