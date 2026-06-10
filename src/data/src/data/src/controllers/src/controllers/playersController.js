const players = require("../data/players");

exports.getAllPlayers = (req, res) => {
  res.json(players);
};

exports.getPlayerById = (req, res) => {

  const player = players.find(
    p => p.id === Number(req.params.id)
  );

  if (!player) {
    return res.status(404).json({
      message: "Jogador não encontrado"
    });
  }

  res.json(player);
};

exports.createPlayer = (req, res) => {

  const player = {
    id: players.length + 1,
    ...req.body
  };

  players.push(player);

  res.status(201).json(player);
};

exports.deletePlayer = (req, res) => {

  const id = Number(req.params.id);

  const index = players.findIndex(
    p => p.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Jogador não encontrado"
    });
  }

  players.splice(index, 1);

  res.json({
    message: "Jogador removido"
  });
};
