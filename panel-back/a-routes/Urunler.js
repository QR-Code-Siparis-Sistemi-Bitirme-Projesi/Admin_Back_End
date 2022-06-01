const express = require("express");
const router = express.Router();

//Ürün ve Sipariş için ekleme yapılacak.
const {
    MenuCagir,
    UrunDuzenle,
    UrunSil,
    UrunEkle
    
} =require("../controls/UrunlerController");
const Schemas = require("../validations/UrunlerValidate");
const {
    SiparisleriCagir,
    SiparisDuzenle,
    SiparisSil
} =require("../controls/SiparislerController");

const Urunlervalidate = require("../validations/UrunlerValidate");
const { SiparislerValidate } = require("../validations/SiparislerValidate");
const { AdminGiris } = require("../controls/AdminController");
const { 
    urunlerValidation,
    siparislerValidation,
    LoginAktifMi,
    AdminGirisValidation
} = require("../middleware/dogrulama");

router.route("/api/UrunEkle").post(UrunEkle);


router.route(process.env.GET_URUN_LISTELE).get(LoginAktifMi(),MenuCagir);

router.route(process.env.PUT_URUN_DUZENLE).put(UrunDuzenle);

router.route(process.env.DELETE_URUN_SIL).delete(UrunSil);

router
  .route(process.env.POST_GIRIS)
  .post(
    AdminGirisValidation(Schemas.AdminValidate),
    AdminGiris
  );

module.exports = router;