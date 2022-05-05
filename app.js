// Imports
const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

// Porta
const port = 3000;

// Ascolta sulla porta
app.listen(port, console.info(`Ascolto su porta ${port}`));

// Connessione al DB
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connesso al DB Pizze");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pizzom", (req, res) => {
  db.get("SELECT * FROM pizze ORDER BY RANDOM() LIMIT 1", (err, row) => {
    if (err) {
      res.send(err.message);
    }
    res.json(row);
  });
});

app.get("/pizze", (req, res) => {
  db.all("SELECT * FROM PIZZE", (err, rows) => {
    if (err) {
      res.send(err.message);
    }
    res.json(rows);
  });
});