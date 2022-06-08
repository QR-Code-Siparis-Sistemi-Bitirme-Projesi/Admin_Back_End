const express = require("express");
const router = express.Router();

//Ürün ve Sipariş için ekleme yapılacak.
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

router.route(process.env.POST_URUN_EKLE).post(LoginAktifMi(),secmeliValidasyon, UrunEkle);

router.route(process.env.GET_URUN_LISTELE).get(LoginAktifMi(), MenuCagir);

router.route(process.env.PUT_URUN_DUZENLE).put(UrunDuzenle);

router.route(process.env.DELETE_URUN_SIL).delete(UrunSil);

router.route(process.env.POST_SIPARIS_EKLE).post(siparislerValidation(SiparisValidate),SiparisEkle);

router.route(process.env.PUT_SIPARIS_DUZENLE).put(SiparisDuzenle);

router.route(process.env.DELETE_SIPARIS_SIL).delete(SiparisSil);

router.route(process.env.GET_SIPARIS_LISTELE).get(SiparisleriCagir);

router
  .route(process.env.POST_GIRIS)
  .post(AdminGirisValidation(adminSchema.AdminValidate), AdminGiris);

module.exports = router;
