import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());
app.use(express.json());

const DB_HOST = process.env.DB_HOST || "db";
const DB_PORT = Number(process.env.DB_PORT || 3306);
const DB_NAME = process.env.DB_NAME || "mhm_store";
const DB_USER = process.env.DB_USER || "mhm_admin";
const DB_PASSWORD = process.env.DB_PASSWORD || "mhm_secret_2026";
const API_PORT = Number(process.env.API_PORT || 3000);

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1 AS connected");
    const [rows] = await pool.query("SHOW TABLES");
    const tables = rows.map((row) => Object.values(row)[0]);

    res.status(200).json({
      status: "ok",
      connected: true,
      message: "Conexión exitosa entre la aplicación y la base de datos MariaDB",
      database: DB_NAME,
      host: DB_HOST,
      port: DB_PORT,
      tables,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      connected: false,
      message: "Error al conectar con la base de datos MariaDB",
      error: error.message,
    });
  }
});

app.get("/api/mochilas", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre, precio, stock, descripcion, imagen FROM mochilas ORDER BY id ASC"
    );
    const data = rows.map((row) => ({
      ...row,
      id: Number(row.id),
      precio: Number(row.precio),
      stock: Number(row.stock),
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "No se pudieron consultar las mochilas desde MariaDB",
      error: error.message,
    });
  }
});

app.listen(API_PORT, "0.0.0.0", () => {
  console.log(`Servidor API MHM Store escuchando en http://0.0.0.0:${API_PORT}`);
});
