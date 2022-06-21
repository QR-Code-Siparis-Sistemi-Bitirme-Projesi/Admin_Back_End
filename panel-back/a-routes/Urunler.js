// Yönlendiriciler ve çalıştıkları kontroller/koşullar burada.
const express = require("express");
const router = express.Router();

const {
  MenuCagir,
  UrunDuzenle,
  UrunSil,
  UrunEkle,
} = require("../controls/UrunlerController");

const Schemas = require("../validations/UrunlerValidate");

const adminSchema = require("..//validations/AdminLoginValidate");
const {
  SiparisEkle,
  SiparisleriCagir,
  SiparisDuzenle,
  SiparisSil,
} = require("../controls/SiparislerController");

const { SiparisValidate } = require("../validations/SiparislerValidate");

const { AdminGiris } = require("../controls/AdminController");
const {
  urunlerValidation,
  siparislerValidation,
  LoginAktifMi,
  AdminGirisValidation,
  secmeliValidasyon,
} = require("../middleware/dogrulama");


router
  .route(process.env.POST_URUN_EKLE)
  .post(LoginAktifMi(), secmeliValidasyon, UrunEkle);

router.route(process.env.GET_URUN_LISTELE).get(MenuCagir);

router.route(process.env.PUT_URUN_DUZENLE).put(LoginAktifMi(), UrunDuzenle);

router.route(process.env.DELETE_URUN_SIL).delete(LoginAktifMi(), UrunSil);

router
  .route(process.env.POST_SIPARIS_EKLE)
  .post(LoginAktifMi(), siparislerValidation(SiparisValidate), SiparisEkle);

router
  .route(process.env.PUT_SIPARIS_DUZENLE)
  .put(LoginAktifMi(), SiparisDuzenle);

router.route(process.env.DELETE_SIPARIS_SIL).delete(LoginAktifMi(), SiparisSil);

router
  .route(process.env.GET_SIPARIS_LISTELE)
  .get(SiparisleriCagir);

router
  .route(process.env.POST_GIRIS)
  .post(AdminGirisValidation(adminSchema.AdminValidate), AdminGiris);

module.exports = router;
