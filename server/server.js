import express from "express";
import Knex from "knex";
import knexfile from "./knexfile.js";
import cors from "cors";

const app = express();
const PORT = 1111;

// Initialize Knex
const db = Knex(knexfile);

// Middleware
app.use(cors());
app.use(express.json());

// Route to insert user
app.post("/api/user", async (req, res) => {
  const { name, email, password_hash, weight, height, age } = req.body;
  try {
    const [id] = await db("user").insert({
      name,
      email,
      password_hash,
      weight,
      height,
      age,
    });
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to handle login
app.post("/api/login", async (req, res) => {
  const { email, password_hash } = req.body;

  try {
    const user = await db("user").where({ email }).first();

    if (user && user.password_hash === password_hash) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to retrieve users
app.get("/api/user", async (req, res) => {
  try {
    const users = await db("user").select("*");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to insert vitals
app.post("/api/vitals", async (req, res) => {
  const { id, datetime, heart_rate, spo2, temperature } = req.body;
  try {
    const [id] = await db("vitals").insert({
      id,
      datetime,
      heart_rate,
      spo2,
      temperature,
    });
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to retrieve vitals
app.get("/api/vitals", async (req, res) => {
  try {
    const vitals = await db("vitals").select("*");
    res.json(vitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
