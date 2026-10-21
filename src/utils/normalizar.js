// Pasa a minúsculas y quita tildes: "Océano" -> "oceano"
export function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}