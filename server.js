const express = require("express");
const { Client } = require("pg");

const app = express();
const port = 3000;

const client = new Client({
  host: "db",
  user: "postgres",
  password: "minha_senha",
  database: "meu_banco",
});

client.connect()
  .then(() => console.log("Conectado ao PostgreSQL"))
  .catch(err => console.error("Erro na conexão", err));

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
