import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Catalogo from "../pages/Catalogo";
import { mochilas } from "../data/mochilas";

const renderCatalogo = () =>
  render(
    <MemoryRouter>
      <Catalogo />
    </MemoryRouter>
  );

describe("Catalogo", () => {
  it("muestra una tarjeta por cada mochila", () => {
    renderCatalogo();
    expect(screen.getAllByRole("link")).toHaveLength(mochilas.length);
  });

  it("filtra los productos al escribir en el buscador", async () => {
    const user = userEvent.setup();
    renderCatalogo();

    await user.type(screen.getByPlaceholderText(/buscar mochila/i), "cartera");

    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(screen.getByText("Cartera Ardilla Roja")).toBeInTheDocument();
  });

  it("muestra un mensaje cuando no hay resultados", async () => {
    const user = userEvent.setup();
    renderCatalogo();

    await user.type(screen.getByPlaceholderText(/buscar mochila/i), "zzzz");

    expect(screen.getByText(/no se encontraron mochilas/i)).toBeInTheDocument();
  });
});