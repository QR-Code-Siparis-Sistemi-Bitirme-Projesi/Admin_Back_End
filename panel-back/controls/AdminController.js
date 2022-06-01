const { AdminGirisKontrol } = require("../servis/AdminLoginServis");

const AdminGiris = (req, res) => {
    AdminGirisKontrol(req.body)
    .then((resKullanici) => {
      res.status(200).json({ mesaj: resKullanici });
    })
    .catch((err) => {
      res.status(401).json({ mesaj: err.message });
    });
};

module.exports = {
  AdminGiris,
};
