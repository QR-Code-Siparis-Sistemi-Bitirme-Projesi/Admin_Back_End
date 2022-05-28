const express = require("express");
const router = express.Router();

const {
    SiparisEkle,
    SiparisleriAl,
    SiparisDuzenle,
    SiparisSil,
    UrunEkle,
    UrunDuzenle,
    UrunSil
} =require("../controls/SiparislerController");
