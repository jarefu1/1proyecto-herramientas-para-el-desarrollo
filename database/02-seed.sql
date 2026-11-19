-- Datos de demostración del catálogo MHM STORE.
-- La imagen MariaDB ejecuta este archivo después de 01-schema.sql al crear el volumen.
USE mhm_store;

INSERT INTO mochilas (id, nombre, precio, stock, descripcion, imagen) VALUES
  (1, 'Mochila Océano', 135.00, 15, 'Mochila Océano.', 'mochila-oceano.jpeg'),
  (2, 'Mochila Cormelina', 112.00, 8, 'Mochila Cormelina.', 'mochila-cormelin.webp'),
  (3, 'Mochila School 3pz Lonchera Cartuchera', 186.00, 22, 'Set escolar de 3 piezas con mochila, lonchera y cartuchera.', 'mochila-school.jpeg'),
  (4, 'Cartera Ardilla Roja', 95.00, 5, 'Cartera marca Ardilla Roja.', 'cartera-ardillaroja.webp'),
  (5, 'Mochila You Urbana', 128.00, 12, 'Mochila urbana You.', 'mochila-you.jpeg'),
  (6, 'Maleta Cross 10 Kilos', 135.00, 9, 'Maleta Cross con capacidad de 10 kilos.', 'maleta-cross.jpeg')
ON DUPLICATE KEY UPDATE id = id;
