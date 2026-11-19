import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Catalogo from "../pages/Catalogo";
import { normalizar } from "../utils/normalizar";

describe("normalizar", () => {
  it("quita tildes y pasa a minúsculas", () => {
    expect(normalizar("Mochila Océano")).toBe("mochila oceano");
  });
});

describe("Catalogo: búsqueda sin tildes (bug TSK-05)", () => {
  it("encuentra 'Mochila Océano' al escribir 'oceano'", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Catalogo />
      </MemoryRouter>
    );

    await user.type(screen.getByPlaceholderText(/buscar mochila/i), "oceano");

    expect(screen.getByText("Mochila Océano")).toBeInTheDocument();
  });
});