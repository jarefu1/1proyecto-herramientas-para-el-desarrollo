import { describe, it, expect } from "vitest";
import { mochilas } from "../data/mochilas";

describe("datos de mochilas", () => {
  it("tiene al menos un producto", () => {
    expect(mochilas.length).toBeGreaterThan(0);
  });

  it("cada producto tiene id único, precio positivo y stock válido", () => {
    const ids = mochilas.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);

    mochilas.forEach((m) => {
      expect(m.precio).toBeGreaterThan(0);
      expect(m.stock).toBeGreaterThanOrEqual(0);
      expect(m.nombre).toBeTruthy();
    });
  });
});