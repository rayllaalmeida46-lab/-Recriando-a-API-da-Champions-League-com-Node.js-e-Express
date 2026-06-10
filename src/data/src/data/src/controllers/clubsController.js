const clubs = require("../data/clubs");

exports.getAllClubs = (req, res) => {
  res.json(clubs);
};

exports.getClubById = (req, res) => {

  const club = clubs.find(
    c => c.id === Number(req.params.id)
  );

  if (!club) {
    return res.status(404).json({
      message: "Clube não encontrado"
    });
  }

  res.json(club);
};
