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
      res.status(200).json({ message: "Login successful", user: user });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to retrieve user by ID

app.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Query the database to find the user by ID
    const user = await db("user").where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Respond with the user data
    res.status(200).json(user); // Send only user data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve user data" });
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
app.post("/api/vitals/:id", async (req, res) => {
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

// Route to retrieve vitals for a specific user based on id
app.get("/api/vitals/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const vitals = await db("vitals").select("*").where("id", userId);

    if (vitals.length === 0) {
      return res.status(404).json({ error: "No vitals found for this user" });
    }

    res.json(vitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
