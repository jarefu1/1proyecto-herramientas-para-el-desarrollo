-- Esquema inicial de Base de Datos - MHM Store (Alumno 2)
-- Este script se ejecuta automáticamente al iniciar el contenedor de MariaDB
-- antes del script de datos de prueba (database/02-seed.sql del Alumno 3).

CREATE DATABASE IF NOT EXISTS mhm_store
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE mhm_store;

CREATE TABLE IF NOT EXISTS mochilas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL CHECK (precio >= 0),
  stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
  descripcion TEXT NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
