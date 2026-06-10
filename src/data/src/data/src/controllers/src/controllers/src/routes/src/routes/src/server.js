const express = require("express");
const cors = require("cors");

const clubsRoutes =
require("./routes/clubs");

const playersRoutes =
require("./routes/players");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clubs", clubsRoutes);
app.use("/players", playersRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(
    `Servidor executando na porta ${PORT}`
  );
});
