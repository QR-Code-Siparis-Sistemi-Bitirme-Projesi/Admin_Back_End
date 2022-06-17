const logger = require("../logs/adminLogger");
const { Ekle, remove, update, MenuAl } = require("../servis/UrunlerServis");

// Ürün ekleme kontrolleri.

const UrunEkle = (req, res, next) => {
  Ekle(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
      logger.info("Ürün eklendi, eklenen ürün: ", response); // log.
    })
    .catch((err) => {
      logger.error("Ürün ekleme hatası: ", err); //Hata log.
      res.status(500).send({ resData: "Ürün uygun değil." });
    });
};
const MenuCagir = (req, res) => {
  MenuAl()
    .then((response) => {
      console.log(response);
      res.status(200).send({ resData: response });
      logger.info("menü gönderildi, Gönderilen menü: ", response);
    })
    .catch((err) => {
      logger.error("Menü hatası: ", err);
      res.status(500).send({ resData: "Veri göndermeye uygun değil." });
    });
};
const UrunDuzenle = (req, res) => {
  update(req.body)
    .then((response) => {
      logger.info("Ürün düzenlendi. Yeni ürün: ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Ürün düzenlenemedi, hata: ", err);
      res.status(500).send({ resData: "Düzenleme yapılamadı." });
    });
};

const UrunSil = (req, res) => {
  remove(req.body)
    .then((response) => {
      logger.info("Ürün silindi. Silinen ürün: ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Ürün silme hatası, hata: ", err);
      res.status(500).send({ resData: "Silme işlemi Başarısız." });
    });
};

module.exports = {
  MenuCagir,
  UrunDuzenle,
  UrunSil,
  UrunEkle,
};
