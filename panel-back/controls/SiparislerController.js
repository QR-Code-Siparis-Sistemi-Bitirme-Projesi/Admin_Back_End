const logger = require("../logs/adminLogger");
const {
  siparisEkle,
  siparisGuncelle,
  siparisSil,
  SiparisAl,
} = require("../servis/SiparislerServis");

//Sipariş işlemlerinin kontrolleri burada.

const SiparisEkle = (req, res) => {
  siparisEkle(req.body)
    .then((response) => { // işlem bloğu.
      res.status(200).send({ resData: response }); //başarılı işlem sonucu dönecek değer.
      logger.info("Sipariş alındı, alınan sipariş: ", req.body);
    })
    .catch((err) => {
      console.log(err);      // hatayı yakalayacak yer.
      logger.error("Sipariş ekleme hatası - ", err);
      res.status(500).send({ resData: "Sipariş hatalı!" }); // başarsıız işlem sonucu dönecek değer.
    });
};

const SiparisleriCagir = (req, res) => {
  SiparisAl()
    .then((response) => {
      console.log(response);
      res.status(200).send({ resData: response });
      logger.info("Siparişler gönderildi, Gönderilen Veri: ", response); //log
    })
    .catch((err) => {
      console.log(err);
      logger.error("Sipariş hatası: ", err); //hata log
      res.status(500).send({ resData: "Sipariş verisi uygun değil." });
    });
};
const SiparisDuzenle = (req, res) => {
  siparisGuncelle(req.body)
    .then((response) => {
      logger.info("Sipariş düzenlendi. Yeni sipariş: ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Sipariş eklenemedi, hata: ", err);
      res.status(500).send({ resData: "Sipariş düzenlemesi yapılamadı." });
    });
};

const SiparisSil = (req, res) => {
  siparisSil(req.body)
    .then((response) => {
      logger.info("Sipariş silindi. Silinen id: ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Sipariş silme hatası, hata: ", err);
      res.status(500).send({ resData: "Sipariş silme işlemi Başarısız." });
    });
};

module.exports = {
  SiparisEkle,
  SiparisleriCagir,
  SiparisDuzenle,
  SiparisSil,
};
