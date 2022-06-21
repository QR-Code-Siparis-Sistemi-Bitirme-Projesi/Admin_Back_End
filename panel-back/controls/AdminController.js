const { AdminGirisKontrol } = require("../servis/AdminLoginServis");
const logger = require("../logs/adminLogger");

const AdminGiris = (req, res) => {
  AdminGirisKontrol(req.body)
    .then((resKullanici) => {
      logger.info("Admin girişi başarılı."); 
      res.status(200).json({ mesaj: resKullanici });
    })
    .catch((err) => {
      logger.error("Admin giriş hatası, hata: ", err); 
      res.status(401).json({ mesaj: err.message });
    });
};

module.exports = {
  AdminGiris,
};
