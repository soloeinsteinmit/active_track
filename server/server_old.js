import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";
import Knex from "knex";
import knexfile from "./knexfile.js";

// const db = Knex(knexfile);

const app = express();
const PORT = 1111;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPromise = open({
  filename: "./fitness.db",
  driver: sqlite3.Database,
});

dbPromise.then((db) => {
  // Create tables
  db.run(`CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        weight REAL,
        height REAL,
        age INTEGER
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS vitals (
        id INTEGER,
        datetime TEXT NOT NULL,
        heart_rate INTEGER,
        spo2 INTEGER,
        temperature REAL,
        FOREIGN KEY (id) REFERENCES user(id)
    )`);
});

// Route to insert user
app.post("/api/user", async (req, res) => {
  const { name, password_hash, weight, height, age } = req.body;
  const db = await dbPromise;
  const query = `INSERT INTO user (name, password_hash, weight, height, age) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [name, password_hash, weight, height, age], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

// Route to retrieve users
app.get("/api/user", async (req, res) => {
  const db = await dbPromise;
  db.all(`SELECT * FROM user`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Route to insert vitals
app.post("/api/vitals", async (req, res) => {
  const { id, datetime, heart_rate, spo2, temperature } = req.body;
  const db = await dbPromise;
  const query = `INSERT INTO vitals (id, datetime, heart_rate, spo2, temperature) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [id, datetime, heart_rate, spo2, temperature], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

// Route to retrieve vitals
app.get("/api/vitals", async (req, res) => {
  const db = await dbPromise;
  db.all(`SELECT * FROM vitals`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
