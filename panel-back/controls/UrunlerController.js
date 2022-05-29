const logger = require("../logs/adminLogger");
const {remove, update, MenuAl } = require("../servis/UrunlerServis");

const MenuCagir = (req, res) => {
  MenuAl()
    .then((response) => {
      console.log(response);
      res.status(200).send({ resData: response });
      logger.info("menü gönderildi, Gönderilen menü: ", response); //log
    })
    .catch((err) => {
      logger.error("Menü hatası: ", err);  //hata log
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
      res
        .status(500)
        .send({ resData: "Silme işlemi Başarısız." });
    });
};

module.exports = {
  MenuCagir,
  UrunDuzenle,
  UrunSil,
};
