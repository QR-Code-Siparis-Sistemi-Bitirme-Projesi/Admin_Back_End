const express = require("express");
const router = express.Router();

//Ürün ve Sipariş için ekleme yapılacak.
const {
    MenuCagir,
    UrunDuzenle,
    UrunSil
} =require("../controls/UrunlerController");
const {
    SiparisleriCagir,
    SiparisDuzenle,
    SiparisSil
} =require("../controls/SiparislerController");

const Urunlervalidate = require("../validations/UrunlerValidate");
const { SiparislerValidate } = require("../validations/SiparislerValidate");
const { urunlerValidation, siparislerValidation, } = require("../middleware/dogrulama");


router.route(process.env.GET_URUN_LISTELE).get(MenuCagir);


module.exports = router;